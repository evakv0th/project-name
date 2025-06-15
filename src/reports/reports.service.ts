import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportsRepository: Repository<Report>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportsRepository.create(createReportDto);
    return await this.reportsRepository.save(report);
  }

  async findAll(): Promise<Report[]> {
    return await this.reportsRepository.find();
  }

  async findOne(id: number): Promise<Report | null> {
    return await this.reportsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateReportDto: UpdateReportDto,
  ): Promise<Report | null> {
    await this.reportsRepository.update(id, updateReportDto);
    return await this.reportsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.reportsRepository.delete(id);
  }
}
