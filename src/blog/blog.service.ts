import { Injectable } from '@nestjs/common';
import { Blog } from './interfaces/blog.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) {}

  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find();
  }

  async findOne(id: string): Promise<Blog> {
    return await this.blogModel.findOne({ _id: id });
  }

  async create(blog: Blog): Promise<Blog> {
    const newBlog = new this.blogModel(blog);
    return await newBlog.save();
  }

  async delete(id: string): Promise<string> {
    const deleteBlog = await this.blogModel.findByIdAndRemove(id);
    if (deleteBlog) {
      return 'Blog deleted successfully';
    } else {
      return 'Blog not found';
    }
  }

  async update(id: string, blog: Blog): Promise<Blog> {
    return await this.blogModel.findByIdAndUpdate(id, blog, { new: true });
  }
}
