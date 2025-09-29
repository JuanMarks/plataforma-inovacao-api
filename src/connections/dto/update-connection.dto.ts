import { PartialType } from '@nestjs/mapped-types';
import { CreateConnectionDto } from './create-connection.dto';

// Apenas o status poderá ser atualizado, então criamos um DTO específico para isso
import { IsEnum, IsOptional } from 'class-validator';
import { ConnectionStatus } from '@prisma/client';

export class UpdateConnectionDto {
    @IsEnum(ConnectionStatus)
    @IsOptional()
    status?: ConnectionStatus;
}