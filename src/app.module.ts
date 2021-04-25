import { Module, OnModuleInit } from '@nestjs/common';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { DataBaseService } from '@nest-excalibur/data-base/lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/category.entity';
import { ProductEntity } from './product/product.entity';
import { PostEntity } from './post/post.entity';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    UserModule,
    PostModule,
    DataBaseModule.forRoot({
      productionFlag: false,
      connections: {
        mysql: {
          type: 'mysql',
          host: 'localhost',
          port: 30501,
          username: 'pimba_man',
          password: '12345678',
          database: 'prueba',
          synchronize: true,
          retryDelay: 40000,
          retryAttempts: 3,
          connectTimeout: 40000,
          keepConnectionAlive: false,
          dropSchema: true,
          charset: 'utf8mb4',
          timezone: 'local',
          ssl: false,
          entities: [CategoryEntity, ProductEntity],
        },
        mongo: {
          type: 'mongodb',
          name: 'conexion_mongo',
          database: 'prueba',
          dropSchema: true,
          useUnifiedTopology: true,
          synchronize: true,
          password: '12345678',
          username: 'pimba_man',
          host: 'localhost',
          port: 30503,
          authSource: 'admin',
          entities: [PostEntity, UserEntity],
        }
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly dataBaseService: DataBaseService) { }

  onModuleInit(): void {
    this.dataBaseService
      .insertData()
      .then((_) => this.dataBaseService.showSummary());
  }
}
