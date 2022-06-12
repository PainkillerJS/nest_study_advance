import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import * as bcrypt from "bcrypt";

import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { TokenService } from "../token/token.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private tokenService: TokenService) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.tokenService.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const { email, password } = userDto;

    const candidate = await this.userService.findUserByEmail(email);

    if (candidate) {
      throw new HttpException("Пользователь с таким email уже есть", HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await this.userService.createUser({ ...userDto, password: hashPassword });

    return this.tokenService.generateToken(user);
  }

  async validateUser(userDto: CreateUserDto) {
    const { email, password } = userDto;

    const user = await this.userService.findUserByEmail(email);
    const isCheckPassword = await bcrypt.compare(password, user.password);

    if (!isCheckPassword && !user) {
      throw new HttpException("Неверный логин или пароль", HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}
