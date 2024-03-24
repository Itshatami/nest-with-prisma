import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserService } from './user.service';


@Controller('users')
export class UserController {

   constructor(public userService:UserService){}

   // Index
   @Get("/")
   getUsers(){
      const users = this.userService.findAll()
      return users;
   }

   // Show
   @Get("/:id")
   async getUser(@Param("id" , ParseIntPipe) param:number){
      const user = await this.userService.findOne(param);
      if(!user) return "not found."
      return user;
   }

   // Create
   @Post("/")
   createUser(@Body() body:CreateUserDto){
      const user = this.userService.create(body)
      return user
   }

   // Update
   @Put("/:id")
   updateUser(@Param("id" , ParseIntPipe) param:number , @Body() body:UpdateUserDto){
      const user = this.userService.update(param , body)
   }

   // Delete
   @Delete("/:id")
   async deleteUser(@Param("id" , ParseIntPipe) param:number){
       await this.userService.destroy(param)
       return "user deleted!"
   }
}
