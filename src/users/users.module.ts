import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./models/user.model";
import { Role } from "../roles/models/roles.model";
import { UserRoles } from "../roles/models/user-roles.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Posts } from "../posts/models/post.model";

@Module({
  imports: [SequelizeModule.forFeature([User, Role, UserRoles, Posts]), RolesModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
