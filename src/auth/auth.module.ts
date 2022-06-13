import { forwardRef, Module } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { TokenModule } from "../token/token.module";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Module({
  imports: [TokenModule, forwardRef(() => UsersModule), TokenModule],
  providers: [AuthService, JwtAuthGuard],
  controllers: [AuthController],
  exports: [AuthService, TokenModule]
})
export class AuthModule {}
