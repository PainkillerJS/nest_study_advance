import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "test@mail.ru", description: "Почта" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "123456", description: "Пароль" })
  @IsNotEmpty()
  password: string;
}
