import { PartialType } from '@nestjs/mapped-types';
import { CreateClubInformationSecondaireDto } from './create-club-information-secondaire.dto';

export class UpdateClubInformationSecondaireDto extends PartialType(CreateClubInformationSecondaireDto) {}
