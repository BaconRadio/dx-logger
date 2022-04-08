import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    newUser(user_id: string, username: string, name: string) {
        return "User added";
    }
}