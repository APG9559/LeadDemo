/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [ UsersModule,
    JwtModule.register({
      secret: 'crm-secret',
      signOptions: { expiresIn: '1d' },
    }),],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
