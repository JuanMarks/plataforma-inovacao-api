import { ChallengeType } from '@prisma/client';
import { IsString, IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';

export class CreateChallengeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  area: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsEnum(ChallengeType)
  @IsOptional()
  type?: ChallengeType;

  @IsString()
  @IsNotEmpty()
  companyId: string;
}