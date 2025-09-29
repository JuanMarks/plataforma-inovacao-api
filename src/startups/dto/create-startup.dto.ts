import { StartupStage } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsUrl } from 'class-validator';

export class CreateStartupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  cnpj?: string;

  @IsString()
  @IsNotEmpty()
  segment: string;

  @IsString()
  @IsNotEmpty()
  problem: string;

  @IsString()
  @IsNotEmpty()
  technology: string;

  @IsEnum(StartupStage)
  @IsOptional()
  stage?: StartupStage;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  founders?: string;

  @IsString()
  @IsOptional()
  pitch?: string;

  @IsUrl()
  @IsOptional()
  website?: string;
}