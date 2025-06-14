import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Office } from '../../offices/entities/office.entity';

export enum UserRole {
  ADMIN = 'admin',
  AUDITOR = 'auditor',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.AUDITOR })
  role: UserRole;

  @ManyToOne(() => Office, (office) => office.users, { nullable: true })
  office: Office;

  @CreateDateColumn()
  createdAt: Date;
}
