import { StartupStage } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStartupDto {
  @ApiProperty({ example: 'Nome da Startup', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'CNPJ da Startup', required: false })
  @IsString()
  @IsOptional()
  cnpj?: string;

  @ApiProperty({ example: 'Segmento da Startup', required: true })
  @IsString()
  @IsNotEmpty()
  segment: string;

  @ApiProperty({ example: 'Problema que a Startup resolve', required: true })
  @IsString()
  @IsNotEmpty()
  problem: string;

  @ApiProperty({ example: 'Tecnologia utilizada pela Startup', required: true })
  @IsString()
  @IsNotEmpty()
  technology: string;

  @ApiProperty({ enum: StartupStage, required: false })
  @IsOptional()
  stage?: StartupStage;

  @ApiProperty({ example: 'Localização da Startup', required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ example: 'Nome dos Fundadores da Startup', required: false })
  @IsString()
  @IsOptional()
  founders?: string;

  @ApiProperty({ example: 'Pitch da Startup', required: false })
  @IsString()
  @IsOptional()
  pitch?: string;

  @ApiProperty({ example: 'https://www.empresa.com', required: false })
  @IsUrl()
  @IsOptional()
  website?: string;
}