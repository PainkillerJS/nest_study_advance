import { IsString, IsNumber } from "class-validator";

export class RoleDto {
  @IsString()
  readonly value: string;

  @IsNumber()
  readonly userId: number;
}
