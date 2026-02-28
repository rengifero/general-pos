import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';

import { PrismaMariaDb } from '@prisma/adapter-mariadb';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  // Built-in NestJS logger instance for PrismaService
  private readonly logger = new Logger(PrismaService.name);


  constructor() {

   
       // Ensure process.env.DATABASE_URL is a non-empty string
    const connectionString = process.env.DATABASE_URL; 
      if (!connectionString) {
      throw new Error('DATABASE_URL is not defined');
    }
    /* const adapter = new PrismaMariaDb({
      //connectionLimit: Number(configService.getOrThrow('DB_CONNECTION_LIMIT')),
      database: configService.getOrThrow('DB_DATABASE'),
      host: configService.getOrThrow('DB_HOST'),
      password: configService.getOrThrow('DB_PASSWORD'),
      user: configService.getOrThrow('DB_USER'),
      // Prisma adapter logger configuration
      logger: {
        network: (info) => {
          this.logger.log('PrismaAdapterNetwork', info);
        },
        query: (info) => {
          this.logger.log('PrismaAdapterQuery', info);
        },
        error: (error) => {
          this.logger.error('PrismaAdapterError', error);
        },
        warning: (info) => {
          this.logger.warn('PrismaAdapterWarning', info);
        },
      },
    }); */

    const adapter = new PrismaMariaDb(connectionString);


    // Prisma client initialization with adapter and full log levels
    super({
      adapter,
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  // Connect to database when module is initialized
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connection succeeded');
  }

  // Disconnect from database when module is destroyed
  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('Database connection disconnected');
  }
}