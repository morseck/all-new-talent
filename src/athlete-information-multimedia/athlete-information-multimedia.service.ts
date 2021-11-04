import { Injectable } from '@nestjs/common';
import { CreateAthleteInformationMultimediaDto } from './dto/create-athlete-information-multimedia.dto';
import { UpdateAthleteInformationMultimediaDto } from './dto/update-athlete-information-multimedia.dto';

@Injectable()
export class AthleteInformationMultimediaService {
  create(createAthleteInformationMultimediaDto: CreateAthleteInformationMultimediaDto) {
    return 'This action adds a new athleteInformationMultimedia';
  }

  findAll() {
    return `This action returns all athleteInformationMultimedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} athleteInformationMultimedia`;
  }

  update(id: number, updateAthleteInformationMultimediaDto: UpdateAthleteInformationMultimediaDto) {
    return `This action updates a #${id} athleteInformationMultimedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} athleteInformationMultimedia`;
  }
}
