import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Report } from '../../reports/entities/report.entity';

export enum CompanyStandard {
  IFRS = 'IFRS',
  UKR = 'UKR',
}

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  size: string; // e.g., 'small', 'medium', 'large'

  @Column({ type: 'enum', enum: CompanyStandard })
  standard: CompanyStandard;

  @OneToMany(() => Report, (report) => report.company)
  reports: Report[];
}
