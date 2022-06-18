import { IsString, IsNumber } from "class-validator";

export default class BanUserDto {
  @IsString()
  readonly userId: number;

  @IsNumber()
  readonly banReason: string;
}
