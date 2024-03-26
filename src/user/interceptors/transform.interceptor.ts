import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";


export class UserTransformInterceptor implements NestInterceptor{
   intercept(context: ExecutionContext, next: CallHandler<any>) {
       console.log("before routeHandler");

       return next.handle().pipe(map((data)=>{
        console.log("after");
        console.log(data);
        const response = {
            id:data.id,
            firstname:data.username,
            mail:data.email
        }
        return response;
       }))
       
   }
}