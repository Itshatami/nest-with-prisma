import { IsEmail, IsString, Length, max, min } from "class-validator";
export class UpdateUserDto{
   @IsString()
   username:string;

   @IsEmail()
   email:string;

   @Length(4,10)
   password:string
}