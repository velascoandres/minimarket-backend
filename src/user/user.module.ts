import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, UserCreateDTO } from './user.entity';
import { DataBaseModule } from '@nest-excalibur/data-base';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity], 'conexion_mongo'),
    DataBaseModule.forBulkData({
      pathDev: '/src/user/bulks/development/user.json',
      creationOrder: 1,
      entity: UserEntity,
      dtoClassValidation: UserCreateDTO,
      connection: 'conexion_mongo',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
