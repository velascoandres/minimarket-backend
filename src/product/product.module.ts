import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { DataBaseModule } from '@nest-excalibur/data-base';
import { ProductCreateDTO } from './dto/product.dto';

import { GoogleCloudStorageModule } from '@nest-excalibur/google-cloud-storage/lib';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    DataBaseModule.forBulkData({
      creationOrder: 2,
      pathDev: '/src/product/mocks/products.json',
      entity: ProductEntity,
      dtoClassValidation: ProductCreateDTO,
    }),
    GoogleCloudStorageModule.register({ bucketDefaultName: 'pimba_test_gcs' }),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
