import { Injectable } from '@nestjs/common';
import { CreateClubInformationSecondaireDto } from './dto/create-club-information-secondaire.dto';
import { UpdateClubInformationSecondaireDto } from './dto/update-club-information-secondaire.dto';

@Injectable()
export class ClubInformationSecondaireService {
  create(createClubInformationSecondaireDto: CreateClubInformationSecondaireDto) {
    return 'This action adds a new clubInformationSecondaire';
  }

  findAll() {
    return `This action returns all clubInformationSecondaire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clubInformationSecondaire`;
  }

  update(id: number, updateClubInformationSecondaireDto: UpdateClubInformationSecondaireDto) {
    return `This action updates a #${id} clubInformationSecondaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} clubInformationSecondaire`;
  }
}
