import { Module } from '@nestjs/common';
import { AthleteInformationMultimediaService } from './athlete-information-multimedia.service';
import { AthleteInformationMultimediaController } from './athlete-information-multimedia.controller';

@Module({
  controllers: [AthleteInformationMultimediaController],
  providers: [AthleteInformationMultimediaService]
})
export class AthleteInformationMultimediaModule {}
