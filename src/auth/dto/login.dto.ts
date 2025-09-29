import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @ApiProperty({ example: 'usuario@exemplo.com', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha-segura', required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}