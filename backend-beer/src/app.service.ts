import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private readonly data: any[];

  constructor() {
    const filePath = path.resolve(__dirname, '../data/data.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    this.data = JSON.parse(fileContent);
  }

  async findAll(): Promise<[]> {
    return this.data.findAll().exec();
  }
}
