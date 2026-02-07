import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '../../src/generated/prisma/client';

import { PrismaMariaDb } from '@prisma/adapter-mariadb'; 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {


 constructor() {
    // Ensure process.env.DATABASE_URL is a non-empty string
    const connectionString = process.env.DATABASE_URL; 
    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined');
    }
   // Pass the adapter instance to the super constructor
    const adapter = new PrismaMariaDb(connectionString);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}