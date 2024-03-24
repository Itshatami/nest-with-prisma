import { IsEmail, IsString, Length } from "class-validator";
export class CreateUserDto{
   @IsString()
   username:string
   
   @IsEmail()
   email:string;

   @Length(4,10 , {
      message:"atleast 4character & 10character max"
   })
   password:string
}