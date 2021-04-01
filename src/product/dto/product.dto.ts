import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '@nest-excalibur/common-api/lib'


export class ProductCreateDTO extends BaseDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    category: number;
}


export class ProductUpdateDto extends PartialType(ProductCreateDTO) {

}