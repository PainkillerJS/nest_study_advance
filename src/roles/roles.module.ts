import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { Role } from "./models/roles.model";

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
