import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // CORREÇÃO: Passar todos os dados do DTO e a senha encriptada
    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser;
    return result;
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { id: true, email: true, name: true, role: true, companyId: true },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, role: true, companyId: true },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // Nota: Não estamos a permitir a atualização da senha aqui por simplicidade.
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: { id: true, email: true, name: true, role: true, companyId: true },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}