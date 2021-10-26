import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthleteModule } from './athlete/athlete.module';

@Module({
  imports: [AthleteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
