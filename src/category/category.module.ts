import { DataBaseModule } from '@nest-excalibur/data-base';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryCreateDTO } from './dto/category.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [CategoryEntity]
    ),
    DataBaseModule.forBulkData(
      {
        creationOrder: 1,
        entity: CategoryEntity,
        pathDev: '/src/category/mocks/categories.json',
        dtoClassValidation: CategoryCreateDTO,
        aliasName: 'Product Categories'
      }
    ),
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
