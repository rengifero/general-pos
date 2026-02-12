import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProductsModule } from './porducts/products.module';
import { PrismaModule } from '../prisma/prisma.module';


@Module({
  imports: [
      // 1. Configurar variables de entorno globalmente
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
 
      autoSchemaFile: join(process.cwd(), 'backend/dist/schema.gql'),
          csrfPrevention: false, 
          
      sortSchema: true,
       introspection: true,  
    }),
    ProductsModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
