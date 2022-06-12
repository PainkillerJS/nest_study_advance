import { IsString } from "class-validator";

export class CreateRolesDto {
  @IsString()
  readonly value: string;

  @IsString()
  readonly description: string;
}
