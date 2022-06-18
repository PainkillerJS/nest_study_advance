import { Module } from "@nestjs/common";

import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/models/user.model";
import { Posts } from "./models/post.model";

@Module({
  imports: [SequelizeModule.forFeature([User, Posts])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
