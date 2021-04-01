import { CategoryEntity } from "src/category/category.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import {AbstractEntity} from '@nest-excalibur/common-api/lib';


@Entity('product')
export class ProductEntity extends AbstractEntity{

    @Column(
        {
            type: 'varchar',
        }
    )
    name: string;

    @Column(
        {
            type: 'decimal',
            precision: 6,
            scale: 2,
        }
    )
    price: number;


    @ManyToOne(
        type => CategoryEntity,
        (category) => category.products 
    )
    category: CategoryEntity | number;

}
