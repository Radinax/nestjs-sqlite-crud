// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module'; // Import the DatabaseModule

@Module({
  imports: [DatabaseModule], // Add DatabaseModule here
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
