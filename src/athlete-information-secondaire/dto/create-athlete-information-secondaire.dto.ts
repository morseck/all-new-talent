import { PartialType } from '@nestjs/swagger';
import { AthleteInformationSecondaire } from '../entities/athlete-information-secondaire.entity';

export class CreateAthleteInformationSecondaireDto extends PartialType(
  AthleteInformationSecondaire,
) {}
