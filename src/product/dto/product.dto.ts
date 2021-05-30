import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { BaseDTO } from '@nest-excalibur/common-api/lib';
import { ApiProperty } from '@nestjs/swagger';


export class ProductCreateDTO extends BaseDTO {
  @ApiProperty(
    {
      type: String
    }
  )
  @IsNotEmpty()
  name: string;
  
  @ApiProperty(
    {
      type: String
    }
  )
  @IsNotEmpty()
  price: number;
  
  @ApiProperty(
    {
      type: Number
    }
  )
  @IsNotEmpty()
  category: number;
}

export class ProductUpdateDto extends BaseDTO {
  @ApiProperty({
    required: false,
    type: String
  })
  @IsOptional()
  name: string;
  
  @ApiProperty(
    {
      required: false,
    }
  )
  @IsOptional()
  price: number;
  
  @ApiProperty(
    {
      required: false,
      type: Number,
    }
  )
  @IsOptional()
  category: number;
}
