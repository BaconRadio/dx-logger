import { Body, Controller, Post} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly UserService:UserService){}
    @Post()
    addUser(@Body('username') username:string,@Body('name') name:string) : any {
        return this.UserService.newUser('user_id',username,name);
    }
}