import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import getSequelizeConfig from "./config/getSequelize.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV === "development" ? "dev" : "prod"}.env`
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig
    }),
    UsersModule,
    RolesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
