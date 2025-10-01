import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// Novas importações do Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // --- INÍCIO DA CONFIGURAÇÃO DO SWAGGER ---

  app.enableCors({
    origin: ['http://localhost:3001',], // Substitua pelos domínios permitidos
    credentials: true,
  });

  // 1. Crie a configuração do documento
  const config = new DocumentBuilder()
    .setTitle('Plataforma de Inovação Aberta - API')
    .setDescription('Documentação completa da API para a Plataforma de Inovação.')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona a opção de autenticação por Token (JWT)
    .build();

  // 2. Crie o documento OpenAPI
  const document = SwaggerModule.createDocument(app, config);

  // 3. Configure a rota para a interface do Swagger
  SwaggerModule.setup('api', app, document);

  // --- FIM DA CONFIGURAÇÃO DO SWAGGER ---

  await app.listen(3000);
}
bootstrap();