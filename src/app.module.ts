import { Module, OnModuleInit } from '@nestjs/common';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { DataBaseService } from '@nest-excalibur/data-base/lib';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/category.entity';
import { ProductEntity } from './product/product.entity';


@Module({
  imports: [
    ProductModule,
    CategoryModule,
    DataBaseModule.forRoot(
      {
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
            entities: [
              CategoryEntity,
              ProductEntity,
            ],
          },
        },
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {

  constructor(
    private readonly dataBaseService: DataBaseService,
  ) {

  }


  onModuleInit() {
    this.dataBaseService.insertData().then(
      _ => this.dataBaseService.showSummary(true),
    )
  }

}


