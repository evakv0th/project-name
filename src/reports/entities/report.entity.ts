import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Company } from '../../companies/entities/company.entity';
import { Office } from '../../offices/entities/office.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  revenue: number;

  @ManyToOne(() => Company, (company) => company.reports)
  company: Company;

  @ManyToOne(() => Office, (office) => office.reports)
  office: Office;

  @CreateDateColumn()
  createdAt: Date;
}
