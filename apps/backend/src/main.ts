/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


   const allowedOrigins = [
    'http://localhost:4200/products', // Your frontend development URL
        //'https://www.your-production-domain.com', // Your actual production domain
    // Add other staging or test domains here
  ];

   /*  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Set to true if your app uses cookies or auth headers
  }); */


  // Configure CORS, specifying allowed headers
  /* app.enableCors({
    origin: allowedOrigins,
    //origin: 'http://localhost:4200', // Replace with your client's origin (e.g., your frontend URL)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    'Content-Type': 'application/json',
    allowedHeaders: 'Content-Type, X-Apollo-Operation-Name, Apollo-Require-Preflight', // Include necessary headers
  credentials: true, // If you need to handle cookies/credentials

  }); */

    app.enableCors();   

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
