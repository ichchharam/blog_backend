import { Blog } from './interfaces/blog.interface';
import { Model } from 'mongoose';
export declare class BlogService {
    private readonly blogModel;
    constructor(blogModel: Model<Blog>);
    findAll(): Promise<Blog[]>;
    findOne(id: string): Promise<Blog>;
    create(blog: Blog): Promise<Blog>;
    delete(id: string): Promise<string>;
    update(id: string, blog: Blog): Promise<Blog>;
}
