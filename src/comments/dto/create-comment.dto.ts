import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'Este é um comentário', required: true })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({ example: 'uuid-da-ideia-aqui', required: true })
  @IsUUID()
  ideaId: string;

  @ApiProperty({ example: 'uuid-do-autor-aqui', required: true })
  @IsUUID()
  authorId: string;
}