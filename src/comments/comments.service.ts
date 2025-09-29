import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({ 
      data: createCommentDto,
      include: { author: { select: { name: true, id: true } } } // Retorna o comentário com o nome do autor
    });
  }

  // Encontra todos os comentários de uma ideia específica
  findAllByIdea(ideaId: string) {
    return this.prisma.comment.findMany({
      where: { ideaId },
      include: { author: { select: { name: true, id: true } } },
      orderBy: { createdAt: 'asc' }
    });
  }

  findOne(id: string) {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  remove(id: string) {
    return this.prisma.comment.delete({ where: { id } });
  }
}