import { CrudApi, CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { Controller } from '@nestjs/common';
import { ProductCreateDTO, ProductUpdateDto } from './dto/product.dto';
import { ProductService } from './product.service';

const options: CrudOptions = {
    dtoConfig: {
        createDtoType: ProductCreateDTO,
        updateDtoType: ProductUpdateDto,
    },
}


@Controller('product')
export class ProductController extends CrudController(options) {

    constructor(
        private readonly productService: ProductService,
    ){
        super(productService);
    }

}
