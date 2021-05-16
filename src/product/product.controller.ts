import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { GoogleCloudStorageService, UploadedFileMetadata } from '@nest-excalibur/google-cloud-storage';
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductCreateDTO, ProductUpdateDto } from './dto/product.dto';
import { ProductService } from './product.service';

const options: CrudOptions = {
  dtoConfig: {
    createDtoType: ProductCreateDTO,
    updateDtoType: ProductUpdateDto,
  },
};

@Controller('product')
export class ProductController extends CrudController(options) {
  constructor(
    private readonly productService: ProductService,
    private readonly googleCloudStorageService: GoogleCloudStorageService,
  ) {
    super(productService);
  }

  @Post('upload-picture')
  @UseInterceptors(FileInterceptor('picture'))
  uploadProductLogo(@UploadedFile() pictureFile: UploadedFileMetadata) {
    return this.googleCloudStorageService.upload(pictureFile);
  }
}
