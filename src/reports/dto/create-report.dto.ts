import { IsNumber, IsString } from 'class-validator';

export class CreateReportDto {
  @IsString()
  description: string;

  @IsNumber()
  revenue: number;

  @IsNumber()
  companyId: number;

  @IsNumber()
  officeId: number;
}
