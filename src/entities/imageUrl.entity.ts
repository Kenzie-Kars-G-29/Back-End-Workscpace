import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Announcement from "./announcement.entity";

@Entity("images_urls")
class ImageUrl {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({})
  coverImage: string;

  @Column({})
  firstImage: string;

  @Column({})
  secondImage: string;

  @Column({ nullable: true })
  thirdImage: string;

  @Column({ nullable: true })
  fourthImage: string;

  @Column({ nullable: true })
  fifthImage: string;

  @Column({ nullable: true })
  sixthImage: string;

  // Relação one to one com Announcement
  @OneToOne((type) => Announcement, (announcement) => announcement.image, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  announcement: Announcement;
}

export default ImageUrl;
