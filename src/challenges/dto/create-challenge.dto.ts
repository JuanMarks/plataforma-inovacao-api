import { ChallengeType } from '@prisma/client';
import { IsString, IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChallengeDto {
  @ApiProperty({ enum: ChallengeType, required: false })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Desafio de Inovação', required: false })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Área de Tecnologia', required: false })
  @IsString()
  @IsNotEmpty()
  area: string;

  @ApiProperty({ example: '2023-01-01', required: false })
  @IsDateString()
  startDate: Date;

  @ApiProperty({ example: '2023-12-31', required: false })
  @IsDateString()
  endDate: Date;

  @ApiProperty({ enum: ChallengeType, required: false })
  @IsEnum(ChallengeType)
  @IsOptional()
  type?: ChallengeType;

  @ApiProperty({ example: 'uuid-da-empresa-aqui', required: false })
  @IsString()
  @IsNotEmpty()
  companyId: string;
}