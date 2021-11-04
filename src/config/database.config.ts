export class DatabaseConfig {
  getConfig(): any {
    return {
      type: 'postgres',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3306,
      username: process.env.USERNAME || 'root',
      password: process.env.PASSWORD || 'root',
      database: process.env.DATABASE || 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }
}
