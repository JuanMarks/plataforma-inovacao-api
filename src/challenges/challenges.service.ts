import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChallengesService {
  constructor(private prisma: PrismaService) {}

  create(createChallengeDto: CreateChallengeDto) {
    return this.prisma.challenge.create({ data: createChallengeDto });
  }

  findAll() {
    return this.prisma.challenge.findMany();
  }

  // Encontra todos os desafios de uma empresa específica
  findAllByCompany(companyId: string) {
    return this.prisma.challenge.findMany({
      where: { companyId },
    });
  }

  findOne(id: string) {
    return this.prisma.challenge.findUnique({ where: { id } });
  }

  update(id: string, updateChallengeDto: UpdateChallengeDto) {
    return this.prisma.challenge.update({
      where: { id },
      data: updateChallengeDto,
    });
  }

  remove(id: string) {
    return this.prisma.challenge.delete({ where: { id } });
  }
}