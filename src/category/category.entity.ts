import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { ProductEntity } from 'src/product/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('category')
export class CategoryEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
  })
  name: string;

  @OneToMany((type) => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  @Column({
    type: 'tinyint',
    default: 1,
  })
  enable: 0 | 1 = 1;
}
