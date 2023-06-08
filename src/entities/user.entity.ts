import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 10 })
  cpf: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ type: "date" })
  birthday: string;

  @Column({})
  description: string;

  @Column({ length: 8 })
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
}

export default User;
