import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth/auth.service';
import { AuthController } from '../auth/auth/auth.controller';
import { UsersModule } from 'src/users/users.module'; // Importamos o UsersModule
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy'; // Criaremos este arquivo a seguir

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    UsersModule, // Adicionamos para ter acesso ao UsersService
    JwtModule.register({
      secret: 'SEU_SEGREDO_SUPER_SECRETO', // Mude isto para uma variável de ambiente!
      signOptions: { expiresIn: '8h' }, // O token expira em 8 horas
    }),
  ],
  providers: [AuthService, JwtStrategy], // Adicionamos a nossa estratégia JWT
  controllers: [AuthController],
})
export class AuthModule {}