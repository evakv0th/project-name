import { IsEnum, IsString } from 'class-validator';
import { CompanyStandard } from '../entities/company.entity';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  size: string;

  @IsEnum(CompanyStandard)
  standard: CompanyStandard;
}
