import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import config from './config/keys';

@Module({
  imports: [
    BlogModule,
    ConfigModule.forRoot({
      envFilePath: '.env', // Specify the path to your .env file
      isGlobal: true, // Make the configuration global (available throughout the app)
      load: [config],
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: config().mongoURL, // Accessing the MongoDB URL from the configuration
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
