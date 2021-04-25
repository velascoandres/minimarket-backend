import {Column, Entity} from 'typeorm';
import {AbstractMongoEntity, BaseDTO} from '@nest-excalibur/common-api/lib';
import { IsNotEmpty, IsNumber } from 'class-validator';

@Entity()
export class UserEntity extends AbstractMongoEntity {
    @Column()
    name: string;
}


export class UserCreateDTO extends BaseDTO {
    @IsNumber()
    name: string;
}
