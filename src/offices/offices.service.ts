import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './entities/office.entity';

@Injectable()
export class OfficesService {
  constructor(
    @InjectRepository(Office)
    private officesRepository: Repository<Office>,
  ) {}
  async create(createOfficeDto: CreateOfficeDto): Promise<Office> {
    const office = this.officesRepository.create(createOfficeDto);
    return this.officesRepository.save(office);
  }

  async findAll(): Promise<Office[]> {
    return this.officesRepository.find();
  }

  async findOne(id: number): Promise<Office | null> {
    return this.officesRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateOfficeDto: UpdateOfficeDto,
  ): Promise<Office | null> {
    await this.officesRepository.update(id, updateOfficeDto);
    return this.officesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.officesRepository.delete(id);
  }
}
