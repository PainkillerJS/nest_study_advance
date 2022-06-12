import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { User } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

  async createUser(dto: CreateUserDto) {
    if (await this.findUserByEmail(dto.email)) {
      throw new HttpException("Пользователь с таким email уже существует", HttpStatus.UNAUTHORIZED);
    }

    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("USER");

    await user.$set("roles", [role.id]);
    user.roles = [role];

    return user;
  }

  async getAllUser() {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });

    return user;
  }
}
