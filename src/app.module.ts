import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChallengesModule } from './challenges/challenges.module';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [UsersModule, PrismaModule, ChallengesModule, IdeasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
