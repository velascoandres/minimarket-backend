import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCreateDTO, PostEntity } from './post.entity';
import { UserEntity } from '../user/user.entity';
import { DataBaseModule } from '@nest-excalibur/data-base';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity], 'conexion_mongo'),
    DataBaseModule.forBulkData({
      pathDev: '/src/post/bulks/development/posts.json',
      creationOrder: 2,
      entity: PostEntity,
      connection: 'conexion_mongo',
      dtoClassValidation: PostCreateDTO,
      refs: {
        user: UserEntity,
      },
    }),
  ],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
