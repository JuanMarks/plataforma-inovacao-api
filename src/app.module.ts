import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChallengesModule } from './challenges/challenges.module';
import { IdeasModule } from './ideas/ideas.module';
import { StartupsModule } from './startups/startups.module';
import { ConnectionsModule } from './connections/connections.module';

@Module({
  imports: [UsersModule, PrismaModule, ChallengesModule, IdeasModule, StartupsModule, ConnectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
