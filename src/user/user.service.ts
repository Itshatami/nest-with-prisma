import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class UserService {
   constructor(public prisma:PrismaService){}
   
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

   async findAll(){
      const users = await this.prisma.user.findMany()
      if(!users) return "no users!"
      return users;
   }

   // GET ONE
   async findOne(param){
      const user = await this.prisma.user.findFirst({
         where:{
            id:param
         }
      })
      return user;
   }
}
