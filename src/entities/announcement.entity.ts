import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";
import ImageUrl from "./imageUrl.entity";

@Entity("announcements")
class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({})
  description: string;

  @Column({ length: 20 })
  brand: string;

  @Column({ length: 50 })
  model: string;

  @Column({ length: 20 })
  color: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 8 })
  fuel: string;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  km: string;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  price: string;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  fipeTablePrice: string;

  @Column({})
  isPublic: boolean;

  //Relação many to one com User
  @ManyToOne(() => User, (user) => user.announcement, {onDelete: "CASCADE"})
  user: User
  
  //Relação one to one com ImageUrl
  @OneToOne((type) => ImageUrl, (image) => image.announcement)
  @JoinColumn()
  image: ImageUrl;
}

export default Announcement;
