import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Announcement from "./announcement.entity";
import { Comment } from "./comment.entity";

@Entity("users")
class User {
  static findById(id: any) {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 11, nullable: true})
  cpf: string;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ type: "date" })
  birthday: string;

  @Column({})
  description: string;

  @Column({ length: 9, nullable: true })
  cep: string;

  @Column({ length: 45 })
  state: string;

  @Column({ length: 45 })
  city: string;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 5 })
  number: string;

  @Column({ length: 20 })
  complement: string;

  @Column({ default: false })
  isSeller: boolean;

  @Column({ nullable: true })
  resetToken: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}

export default User;
