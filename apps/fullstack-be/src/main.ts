/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const setupOpenApi = (app: INestApplication) => {
  const builder = new DocumentBuilder()
    .setTitle('Items example')
    .setDescription('The items API description')
    .setVersion('1.0')
    .addTag('items')
    // .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('openapi', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const globalPrefix = 'api';
  app.enableVersioning();
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);

  setupOpenApi(app);
  
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
