import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  name!: string;

  @IsEmail({}, { message: 'email must be a valid email address' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'password must be at least 6 characters long' })
  password!: string;
}