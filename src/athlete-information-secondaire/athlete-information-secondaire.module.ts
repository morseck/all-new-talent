import { Module } from '@nestjs/common';
import { AthleteInformationSecondaireService } from './athlete-information-secondaire.service';
import { AthleteInformationSecondaireController } from './athlete-information-secondaire.controller';

@Module({
  controllers: [AthleteInformationSecondaireController],
  providers: [AthleteInformationSecondaireService]
})
export class AthleteInformationSecondaireModule {}
