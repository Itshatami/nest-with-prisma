import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';


@Injectable()
export class UserService {
   constructor(public prisma:PrismaService){}
   
   // CREATE
   async create(data:CreateUserDto){
      const user = await this.prisma.user.create({
         data:{
            username:data.username,
            email:data.email,
            password:data.password
         }
      })
      if(!user) return "create faild"
      return user;
   }

   // GET ALL
   async findAll(){
      const users = await this.prisma.user.findMany()
      if(!users) throw new NotFoundException("users not found")
      return users;
   }

   // GET ONE
   async findOne(param:number){
      const user = await this.prisma.user.findUnique({
         where:{
            id:param
         }
      })
      return user;
   }

   // UPDATE
   async update(param:number , body:UpdateUserDto){
      const user = await this.prisma.user.update({
         where:{
            id:param
         },
         data:{
            username:body.username,
            email:body.email,
            password:body.password,
         }
      })
      if(!user) throw new NotFoundException("user not found!")
      return user;
   }

   // DELETE ONE
   async destroy(param:number){
      await this.prisma.user.delete({
         where:{
            id:param
         }
      })
      return "deleted"
   }
}
