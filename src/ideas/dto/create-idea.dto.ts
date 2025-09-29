import { FunnelStage } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIdeaDto {
  @ApiProperty({ example: 'Título da Ideia', required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Descrição da Ideia', required: true })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Alta', required: true })
  @IsString()
  @IsNotEmpty()
  priority: string;

  @ApiProperty({ enum: FunnelStage, required: false })
  @IsOptional()
  stage?: FunnelStage;

  @ApiProperty({ example: 'uuid-da-empresa-aqui', required: true })
  @IsUUID()
  companyId: string;

  @ApiProperty({ example: 'uuid-do-desafio-aqui', required: true })
  @IsUUID()
  challengeId: string;

  @ApiProperty({ example: 'uuid-do-autor-aqui', required: true })
  @IsUUID()
  authorId: string;
}
