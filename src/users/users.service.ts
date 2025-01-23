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

  async update(id: number, name?: string, age?: number) {
    let sql = 'UPDATE users SET ';
    const params = [];

    if (name !== undefined) {
      sql += 'name = ?';
      params.push(name);
    }

    if (age !== undefined) {
      if (name !== undefined) sql += ', ';
      sql += 'age = ?';
      params.push(age);
    }

    sql += ' WHERE id = ?';
    params.push(id);

    await this.databaseService.run(sql, params);
    return { id, name, age };
  }

  async delete(id: number) {
    const sql = 'DELETE FROM users WHERE id = ?';
    await this.databaseService.run(sql, [id]);
    return { id };
  }
}
