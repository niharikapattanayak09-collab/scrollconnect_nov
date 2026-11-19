import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';
import { RegisterDto } from './dto/register.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email is already registered');
    }
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create(dto.name, dto.email, hashed);
    return { id: user.id, name: user.name, email: user.email };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    const passwordMatches = user
      ? await bcrypt.compare(dto.password, user.password)
      : false;

    if (!user || !passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}