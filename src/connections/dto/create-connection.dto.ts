import { ConnectionStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateConnectionDto {
  @IsUUID()
  challengeId: string;

  @IsUUID()
  startupId: string;

  @IsUUID()
  companyId: string;

  @IsEnum(ConnectionStatus)
  @IsOptional()
  status?: ConnectionStatus;
}