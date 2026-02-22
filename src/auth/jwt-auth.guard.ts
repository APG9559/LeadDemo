/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
// The logic of JwtAuthGuard comes from extending the AuthGuard('jwt') provided by @nestjs/passport.
// By default, this guard will automatically validate the JWT present in the Authorization header of requests.