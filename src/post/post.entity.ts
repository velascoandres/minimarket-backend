import {Column, Entity} from 'typeorm';
import {AbstractMongoEntity} from '@nest-excalibur/common-api/lib';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class PostEntity extends AbstractMongoEntity {
    @Column()
    user: string;
}


export class PostCreateDTO extends AbstractMongoEntity {
    @IsNotEmpty()
    user: string;
}
