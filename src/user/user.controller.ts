import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
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
   @Get()
   async getUser(@Param() param:number){
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
   @Put()
   updateUser(){
      return "Update"
   }

   // Delete
   @Delete()
   deleteUser(){
      return "Delete"
   }
}
