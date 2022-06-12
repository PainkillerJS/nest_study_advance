import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { Role } from "./models/roles.model";
import { User } from "../users/models/user.model";
import { UserRoles } from "./models/user-roles.model";

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService]
})
export class RolesModule {}
