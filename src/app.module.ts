import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { ClubInformationSecondaireModule } from './club-information-secondaire/club-information-secondaire.module';
import { AthleteInformationMultimediaModule } from './athlete-information-multimedia/athlete-information-multimedia.module';
import { AthleteInformationSecondaireModule } from './athlete-information-secondaire/athlete-information-secondaire.module';
import { DisciplineModule } from './discipline/discipline.module';
import { ClubModule } from './club/club.module';
import { AthleteModule } from './athlete/athlete.module';
import { Connection } from 'typeorm';

const databaseConfig = new DatabaseConfig();

@Module({
  imports: [
    //TypeOrmModule.forRoot(databaseConfig.getConfig()),
    AthleteModule,
    ClubModule,
    DisciplineModule,
    AthleteInformationSecondaireModule,
    AthleteInformationMultimediaModule,
    ClubInformationSecondaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  private connection: Connection;
}
