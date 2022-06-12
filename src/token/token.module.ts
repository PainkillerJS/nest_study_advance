import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { TokenService } from "./token.service";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "secret",
      signOptions: {
        expiresIn: "24h"
      }
    })
  ],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
