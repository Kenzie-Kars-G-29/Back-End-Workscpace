import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

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
  km: number;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  price: number;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  fipeTablePrice: number;

  @Column({})
  isPublic: boolean;

  @ManyToOne(() => User)
  sellerId: string;
}

export default Announcement;
