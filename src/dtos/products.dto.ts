import { IsString, IsNumber, IsUrl, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
