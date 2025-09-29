import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsUUID()
  ideaId: string;

  @IsUUID()
  authorId: string;
}