import { DataSourceOptions } from 'typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

const dbConfig: DataSourceOptions = {
  name: 'default',
  type: 'sqlite',
  database: process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'db.sqlite',
  synchronize: false,
  entities: [Report, User],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: true,
};

export default dbConfig;
