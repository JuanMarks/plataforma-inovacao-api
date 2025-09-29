import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Adicione aqui
  controllers: [ChallengesController],
  providers: [ChallengesService],
})
export class ChallengesModule {}