import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { createUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('id')
  findOne(@Param() param): Promise<User> {
    return this.userService.findOne(param.id);
  }

  @Post()
  create(@Body() createUserDTO: createUserDTO): Promise<User> {
    return this.userService.create(createUserDTO);
  }

  @Delete(':id')
  delete(@Param('id') param): Promise<User> {
    return this.userService.delete(param.id);
  }

  @Put(':id')
  update(@Body() updateUserDTO: createUserDTO, @Param('id') id): Promise<User> {
    return this.userService.update(id, updateUserDTO);
  }
}
