import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import * as morgan from 'morgan';
import config from './config/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = app.get(Logger);

  app.use(
    morgan('tiny', {
      stream: {
        write: (message) => logger.log(message),
      },
    }),
  );
  const port = config().port;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  logger.log(`Server running on http://localhost:${port}`);
}
bootstrap();
