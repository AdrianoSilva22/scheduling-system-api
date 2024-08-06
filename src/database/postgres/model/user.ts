import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SchedulingEntity } from "../../../entity/scheduling";

@Entity({ schema: 'public', name: 'users' })
class UserModel {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  ID: string

  @Column({ type: 'varchar', length: '255' })
  name: string

  @Column({ type: 'varchar', length: '255', unique: true })
  email: string

  @Column({ type: 'varchar', length: '255' })
  password: string

  @Column({ type: 'varchar', length: '255' })
  phone: string

  @Column({ type: 'varchar', length: '50' })
  role: "manager" | "professional" | "client"

  @OneToMany(type => SchedulingEntity, scheduling => scheduling.clientId)
  scheduling?: SchedulingEntity[]

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date


  constructor(
    ID: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    role: "manager" | "professional" | "client",
    scheduling: SchedulingEntity[],
    createdAt: Date,
    updatedAt: Date
  ) {
    this.ID = ID
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role;
    this.scheduling = scheduling
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export {
  UserModel
};

