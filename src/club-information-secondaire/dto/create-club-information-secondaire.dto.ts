import { PartialType } from '@nestjs/swagger';
import { ClubInformationSecondaire } from '../entities/club-information-secondaire.entity';

export class CreateClubInformationSecondaireDto extends PartialType(
  ClubInformationSecondaire,
) {}
