import { FunnelStage } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsUUID } from 'class-validator';

export class CreateIdeaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  priority: string;

  @IsEnum(FunnelStage)
  @IsOptional()
  stage?: FunnelStage;

  @IsUUID()
  companyId: string;

  @IsUUID()
  challengeId: string;

  @IsUUID()
  authorId: string;
}
