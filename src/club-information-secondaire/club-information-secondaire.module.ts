import { Module } from '@nestjs/common';
import { ClubInformationSecondaireService } from './club-information-secondaire.service';
import { ClubInformationSecondaireController } from './club-information-secondaire.controller';

@Module({
  controllers: [ClubInformationSecondaireController],
  providers: [ClubInformationSecondaireService]
})
export class ClubInformationSecondaireModule {}
