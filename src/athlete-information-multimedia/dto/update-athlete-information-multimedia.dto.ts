import { PartialType } from '@nestjs/mapped-types';
import { CreateAthleteInformationMultimediaDto } from './create-athlete-information-multimedia.dto';

export class UpdateAthleteInformationMultimediaDto extends PartialType(CreateAthleteInformationMultimediaDto) {}
