import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return await this.usersService.createUser(userDto);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUser();
  }
}
