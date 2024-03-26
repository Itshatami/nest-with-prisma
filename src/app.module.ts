import { MiddlewareConsumer, Module, NestMiddleware, NestModule, RequestMethod } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { sayWelcome } from "./middlewares/sayWelcome.middleware";

@Module({
   imports:[UserModule]
})
export class AppModule implements NestModule{

   // Middlewares For /users Route
   configure(consumer: MiddlewareConsumer) {
       consumer.apply(LoggerMiddleware , sayWelcome).forRoutes({path:"users" , method:RequestMethod.GET})
   }
}