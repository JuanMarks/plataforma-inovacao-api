import { Injectable } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConnectionsService {
  constructor(private prisma: PrismaService) {}

  create(createConnectionDto: CreateConnectionDto) {
    return this.prisma.connection.create({ data: createConnectionDto });
  }

  // Encontra todas as conexões de um desafio específico
  findAllByChallenge(challengeId: string) {
    return this.prisma.connection.findMany({
      where: { challengeId },
      include: { startup: true }, // Inclui os dados da startup conectada
    });
  }

  findOne(id: string) {
    return this.prisma.connection.findUnique({
      where: { id },
      include: { startup: true, challenge: true },
    });
  }

  update(id: string, updateConnectionDto: UpdateConnectionDto) {
    return this.prisma.connection.update({
      where: { id },
      data: updateConnectionDto,
    });
  }

  remove(id: string) {
    return this.prisma.connection.delete({ where: { id } });
  }
}