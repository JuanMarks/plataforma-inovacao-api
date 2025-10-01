import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @Post()
  create(@Body() createConnectionDto: CreateConnectionDto) {
    return this.connectionsService.create(createConnectionDto);
  }

  // O método findAll() genérico foi removido.
  // Em vez dele, usamos um mais específico, se necessário, como findAllByChallenge.

   @Get()
  findAll() {
    return this.connectionsService.findAll();
  }

  @Get('challenge/:challengeId')
  findAllByChallenge(@Param('challengeId') challengeId: string) {
    return this.connectionsService.findAllByChallenge(challengeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // CORREÇÃO: Removido o '+'
    return this.connectionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConnectionDto: UpdateConnectionDto) {
    // CORREÇÃO: Removido o '+'
    return this.connectionsService.update(id, updateConnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // CORREÇÃO: Removido o '+'
    return this.connectionsService.remove(id);
  }
}