import { Injectable } from '@nestjs/common';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StartupsService {
  constructor(private prisma: PrismaService) {}

  create(createStartupDto: CreateStartupDto) {
    return this.prisma.startup.create({ data: createStartupDto });
  }

  findAll() {
    return this.prisma.startup.findMany();
  }

  findOne(id: string) {
    return this.prisma.startup.findUnique({ where: { id } });
  }

  update(id: string, updateStartupDto: UpdateStartupDto) {
    return this.prisma.startup.update({
      where: { id },
      data: updateStartupDto,
    });
  }

  remove(id: string) {
    return this.prisma.startup.delete({ where: { id } });
  }
}