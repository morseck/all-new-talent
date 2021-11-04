import { Injectable } from '@nestjs/common';
import { CreateAthleteInformationSecondaireDto } from './dto/create-athlete-information-secondaire.dto';
import { UpdateAthleteInformationSecondaireDto } from './dto/update-athlete-information-secondaire.dto';

@Injectable()
export class AthleteInformationSecondaireService {
  create(createAthleteInformationSecondaireDto: CreateAthleteInformationSecondaireDto) {
    return 'This action adds a new athleteInformationSecondaire';
  }

  findAll() {
    return `This action returns all athleteInformationSecondaire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} athleteInformationSecondaire`;
  }

  update(id: number, updateAthleteInformationSecondaireDto: UpdateAthleteInformationSecondaireDto) {
    return `This action updates a #${id} athleteInformationSecondaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} athleteInformationSecondaire`;
  }
}
