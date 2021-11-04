export class DatabaseConfig {
  getConfig(): any {
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      database: process.env.DATABASE_DATABASE || 'postgres',
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'touba2014',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }
}
