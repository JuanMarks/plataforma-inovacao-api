import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { FunnelStage } from '@prisma/client';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  create(@Body() createIdeaDto: CreateIdeaDto) {
    return this.ideasService.create(createIdeaDto);
  }

  @Get()
  findAll() {
    return this.ideasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ideasService.findOne(id);
  }

  @Get('challenge/:challengeId')
  findAllByChallenge(@Param('challengeId') challengeId: string) {
    return this.ideasService.findAllByChallenge(challengeId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdeaDto: UpdateIdeaDto) {
    return this.ideasService.update(id, updateIdeaDto);
  }

  // Novo endpoint para mudar a etapa do funil
  @Patch(':id/stage')
  updateStage(@Param('id') id: string, @Body('stage') stage: FunnelStage) {
    return this.ideasService.updateStage(id, stage);
  }

  // Novo endpoint para votar
  @Post(':id/vote')
  vote(@Param('id') id: string) {
    return this.ideasService.vote(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ideasService.remove(id);
  }
}