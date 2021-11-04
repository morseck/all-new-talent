import { PartialType } from '@nestjs/swagger';
import { AthleteInformationMultimedia } from '../entities/athlete-information-multimedia.entity';

export class CreateAthleteInformationMultimediaDto extends PartialType(
  AthleteInformationMultimedia,
) {}
