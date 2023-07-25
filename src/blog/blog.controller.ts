import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Promise<Blog> {
    return this.blogService.findOne(param.id);
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<string> {
    return this.blogService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateBlogDto, @Param('id') id): Promise<Blog> {
    return this.blogService.update(id, updateItemDto);
  }
}
