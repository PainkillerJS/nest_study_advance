import { ConfigService } from "@nestjs/config";

import type { SequelizeModuleOptions } from "@nestjs/sequelize/dist/interfaces/sequelize-options.interface";

import { User } from "../users/models/user.model";
import { Role } from "../roles/models/roles.model";

const getSequelizeConfig = (configService: ConfigService): Promise<SequelizeModuleOptions> | SequelizeModuleOptions => ({
  dialect: "postgres",
  host: configService.get("POSTGRES_HOST"),
  port: configService.get("POSTGRES_PORT"),
  username: configService.get("POSTGRES_USER"),
  password: configService.get("POSTGRES_PASSWORD"),
  database: "nest-course",
  models: [User, Role],
  autoLoadModels: true,
  logging: false
});

export default getSequelizeConfig;
