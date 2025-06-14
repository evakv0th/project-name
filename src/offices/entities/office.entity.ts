import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Report } from '../../reports/entities/report.entity';

@Entity()
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => User, (user) => user.office)
  users: User[];

  @OneToMany(() => Report, (report) => report.office)
  reports: Report[];
}
