import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { GoogleCloudStorageService, UploadedFileMetadata } from '@nest-excalibur/google-cloud-storage';
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductCreateDTO, ProductUpdateDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { GoogleCloudVisionService } from '@nest-excalibur/google-cloud-vision/lib';
import {CrudDoc} from '@nest-excalibur/crud-swagger/lib';

const options: CrudOptions = {
  dtoConfig: {
    createDtoType: ProductCreateDTO,
    updateDtoType: ProductUpdateDto,
  },
};


@CrudDoc(
  {
    createOne: {
      apiBody: {
        type: ProductCreateDTO,
      }
    },
    updateOne: {
      apiBody: {
        type: ProductUpdateDto,
      }
    },
  }
)
@Controller('product')
export class ProductController extends CrudController(options) {
  constructor(
    private readonly productService: ProductService,
    private readonly googleCloudStorageService: GoogleCloudStorageService,
    private readonly googleCloudVisionAService: GoogleCloudVisionService,
  ) {
    super(productService);
  }

  @Post('upload-picture')
  @UseInterceptors(FileInterceptor('picture'))
  uploadProductLogo(@UploadedFile() pictureFile: UploadedFileMetadata) {
    return this.googleCloudStorageService.upload(pictureFile);
  }

  @Get('inspect-image')
  @UseInterceptors(FileInterceptor('image'))
  async inspectImage(@UploadedFile() imageFile) {
    // Fecth the file and get it's buffer.
    const imageBuffer = imageFile.buffer;
    // Invoke the respective service methods
    const text = await this.googleCloudVisionAService.detectText(imageBuffer);
    const faces = await this.googleCloudVisionAService.detectFaces(imageBuffer);
    const explictContent = await this.googleCloudVisionAService.detectExplicitContent(imageBuffer);
    const objects = await this.googleCloudVisionAService.detectMultipleObjects(imageBuffer);
    const properties = await this.googleCloudVisionAService.detectProperties(imageBuffer);
    return {
      text,
      faces,
      explictContent,
      objects,
      properties,
    };
  }
}
