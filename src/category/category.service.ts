import { AbstractService } from '@nest-excalibur/common-api/lib';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService extends AbstractService<CategoryEntity> {

    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRespository: Repository<CategoryEntity>,
    ) {
        super(categoryRespository);
    }

}
