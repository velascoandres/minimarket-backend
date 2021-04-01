import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDTO, CategoryUpdateDTO } from './dto/category.dto';

const options: CrudOptions = {
    dtoConfig: {
        createDtoType: CategoryCreateDTO,
        updateDtoType: CategoryUpdateDTO,
    }
}


@Controller('category')
export class CategoryController extends CrudController(options)  {

    constructor(
        private readonly categoryService: CategoryService,
    ){
        super(categoryService);
    }

}
