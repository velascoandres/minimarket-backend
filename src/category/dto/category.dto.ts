import { BaseDTO } from '@nest-excalibur/common-api/lib';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';

export class CategoryCreateDTO extends BaseDTO {
  @IsNotEmpty()
  name: string;
}

export class CategoryUpdateDTO extends PartialType(CategoryCreateDTO) {}
