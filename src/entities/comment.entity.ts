import { Expose } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./user.entity";
import Announcement from "./announcement.entity";


@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Announcement)
  announcement: Announcement;

  @Expose({ name: 'timeAgo' })
  get timeSinceCreation(): string {
    const differenceInSeconds = (new Date().getTime() - this.createdAt.getTime()) / 1000;

    const years = Math.floor(differenceInSeconds / 31536000);
    if (years > 1) {
      return `${years} years ago`;
    }

    const months = Math.floor((differenceInSeconds % 31536000) / 2592000);
    if (months > 1) {
      return `${months} months ago`;
    }

    const days = Math.floor(((differenceInSeconds % 31536000) % 2592000) / 86400);
    if (days > 1) {
      return `${days} days ago`;
    }

    const hours = Math.floor((((differenceInSeconds % 31536000) % 2592000) % 86400) / 3600);
    if (hours > 1) {
      return `${hours} hours ago`;
    }

    const minutes = Math.floor(((((differenceInSeconds % 31536000) % 2592000) % 86400) % 3600) / 60);
    if (minutes > 1) {
      return `${minutes} minutes ago`;
    }

    return `${Math.floor(differenceInSeconds)} seconds ago`;
  }
}
