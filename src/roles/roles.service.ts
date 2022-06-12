import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Role } from "./models/roles.model";
import { CreateRolesDto } from "./dto/CreateRolesDto.dto";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly role: typeof Role) {}

  async createRole(dto: CreateRolesDto) {
    const role = await this.role.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.role.findOne({ where: { value } });

    return role;
  }
}
