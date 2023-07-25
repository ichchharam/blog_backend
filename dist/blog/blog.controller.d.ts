import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    findAll(): Promise<Blog[]>;
    findOne(param: any): Promise<Blog>;
    create(createBlogDto: CreateBlogDto): Promise<Blog>;
    delete(id: any): Promise<string>;
    update(updateItemDto: CreateBlogDto, id: any): Promise<Blog>;
}
