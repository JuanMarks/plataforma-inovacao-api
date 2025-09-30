import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({ data: createCompanyDto });
  }

  findAll() {
    // Retorna a empresa e a contagem de utilizadores associados
    return this.prisma.company.findMany({
      include: {
        _count: {
          select: { users: true },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  remove(id: string) {
    return this.prisma.company.delete({ where: { id } });
  }
}