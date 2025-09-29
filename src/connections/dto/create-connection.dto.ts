import { ConnectionStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConnectionDto {
  @ApiProperty({ example: 'uuid-do-desafio-aqui', required: true })
  @IsUUID()
  challengeId: string;

  @ApiProperty({ example: 'uuid-da-startup-aqui', required: true })
  @IsUUID()
  startupId: string;

  @ApiProperty({ example: 'uuid-da-empresa-aqui', required: true })
  @IsUUID()
  companyId: string;

  @ApiProperty({ enum: ConnectionStatus, required: false })
  @IsEnum(ConnectionStatus)
  @IsOptional()
  status?: ConnectionStatus;
}