/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
// import { Role } from '../users/entities/users.entity';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        private jwtService: JwtService,
    ){}

    async register(data: RegisterDto){
        const hashedPassword = await bcrypt.hash(data.password, 10);

        
        const user = await this.userService.create({
            email: data.email,
            password_hash: hashedPassword,
            first_name: data.first_name,
            last_name: data.last_name,
            // role: data.role || Role.SALES_REP,
        });
        const payload = { sub:user.id, email: user.email, role:user.role};

        return {
            user,
            access_token: this.jwtService.sign(payload),
        }
    }

    async login(data : LoginDto){
        const user = await this.userService.findByEmail(data.email);

        if(!user){
            throw new Error('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(data.password, user.password_hash);

        if(!isMatch){
            throw new Error('Invalid credentials');
        }

        const payload = {sub: user.id, email:user.email};

        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

  
}
