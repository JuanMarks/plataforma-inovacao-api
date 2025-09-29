import { Injectable } from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FunnelStage } from '@prisma/client';

@Injectable()
export class IdeasService {
  constructor(private prisma: PrismaService) {}

  create(createIdeaDto: CreateIdeaDto) {
    return this.prisma.idea.create({ data: createIdeaDto });
  }

  findAll() {
    return this.prisma.idea.findMany();
  }

  // Encontra todas as ideias de um desafio específico
  findAllByChallenge(challengeId: string) {
    return this.prisma.idea.findMany({
      where: { challengeId },
    });
  }

  findOne(id: string) {
    return this.prisma.idea.findUnique({ where: { id } });
  }

  // Lógica para mover a ideia no funil
  updateStage(id: string, stage: FunnelStage) {
    return this.prisma.idea.update({
      where: { id },
      data: { stage },
    });
  }

  // Lógica para votar numa ideia
  vote(id: string) {
    return this.prisma.idea.update({
      where: { id },
      data: {
        votes: {
          increment: 1,
        },
      },
    });
  }

  update(id: string, updateIdeaDto: UpdateIdeaDto) {
    return this.prisma.idea.update({
      where: { id },
      data: updateIdeaDto,
    });
  }

  remove(id: string) {
    return this.prisma.idea.delete({ where: { id } });
  }
}