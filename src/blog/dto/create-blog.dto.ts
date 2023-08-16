import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsDate()
  date: Date;
  @IsString()
  readonly author: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
