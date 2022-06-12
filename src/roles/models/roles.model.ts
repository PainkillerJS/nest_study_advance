import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/models/user.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreation {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreation> {
  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "admin", description: "Роль пользователя" })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @ApiProperty({ example: "Имеет полный функционал", description: "Описание роли" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
