// src/users/dto/create-user.dto.ts
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
}
