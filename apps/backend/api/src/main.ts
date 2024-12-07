/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import fs from 'fs';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'debug', 'log', 'verbose']
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3003;

    // SWAGGER
    const config = new DocumentBuilder()
        .setTitle('API Documentation')
        .setVersion('0.1')
        .addTag('api')
        .build();

    // TODO: ONLY RUN FOR DEVELOPMENT
    const document = () => SwaggerModule.createDocument(app, config);
    fs.writeFileSync(
        './libs/shared/api-contract/swagger-spec.json',
        JSON.stringify(document(), null, 2)
    );

    await app.listen(port);
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
