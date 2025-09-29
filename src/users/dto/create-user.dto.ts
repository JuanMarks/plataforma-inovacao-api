import { ApiProperty } from '@nestjs/swagger'; // Importe o ApiProperty
import { Role } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'ana.silva@techcorp.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Ana Silva' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;

  @ApiProperty({ enum: Role, example: Role.GESTOR })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ example: 'uuid-da-empresa-aqui' })
  @IsString()
  @IsNotEmpty()
  companyId: string;
}