/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(data: Partial<User>) {
    const user = this.usersRepository.create(data);
    return this.usersRepository.save(user);
  }
  async findAll(){
    return this.usersRepository.find();
  }
  async findByEmail(email: string) {
    return this.usersRepository.findOne({
    where: { email },
  });
}

}
