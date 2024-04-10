import { rm } from 'fs/promises';
import { join } from 'path';
import { DataSource } from 'typeorm';
import dbConfig from '../src/ormconfig';

export const AppDataSource = new DataSource(dbConfig);

AppDataSource.initialize()
  .then(() => {
    rm(join(__dirname, '..', 'test.sqlite'));
  })
  .catch((error) => console.log(error));
