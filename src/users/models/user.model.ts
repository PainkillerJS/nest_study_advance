import { BelongsToMany, Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { Role } from "../../roles/models/roles.model";
import { UserRoles } from "../../roles/models/user-roles.model";
import { Posts } from "../../posts/models/post.model";

interface UserCreation {
  email: string;
  password: string;
  isBanned: boolean;
  banReason: string;
  roles: Role[];
  posts: Posts[];
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreation> {
  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "test@mail.ru", description: "Почта" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "123456", description: "Пароль" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "true", description: "Забанен ли поьзователь" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBanned: boolean;

  @ApiProperty({ example: "Хулиганство", description: "Оскорбление пользователей" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasOne(() => Posts)
  posts: Posts[];
}
