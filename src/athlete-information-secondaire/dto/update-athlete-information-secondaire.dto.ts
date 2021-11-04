import { PartialType } from '@nestjs/mapped-types';
import { CreateAthleteInformationSecondaireDto } from './create-athlete-information-secondaire.dto';

export class UpdateAthleteInformationSecondaireDto extends PartialType(CreateAthleteInformationSecondaireDto) {}
