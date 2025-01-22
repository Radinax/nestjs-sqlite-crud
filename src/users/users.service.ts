// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    const sql = 'SELECT * FROM users';
    return this.databaseService.query(sql);
  }

  async findOne(id: number) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    return this.databaseService.query(sql, [id]);
  }

  async create(name: string, age: number) {
    const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
    await this.databaseService.run(sql, [name, age]);
    return { name, age };
  }

  async update(id: number, name: string, age: number) {
    const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
    await this.databaseService.run(sql, [name, age, id]);
    return { id, name, age };
  }

  async delete(id: number) {
    const sql = 'DELETE FROM users WHERE id = ?';
    await this.databaseService.run(sql, [id]);
    return { id };
  }
}
