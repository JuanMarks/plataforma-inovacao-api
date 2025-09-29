import { Role } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

// Removemos o seu 'enum Role' daqui

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;

  @IsEnum(Role) // Usamos o Enum do Prisma para validar
  role: Role;

  @IsString()
  @IsNotEmpty()
  companyId: string;
}