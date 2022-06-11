import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { User } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getAllUser() {
    return await this.userRepository.findAll();
  }
}
