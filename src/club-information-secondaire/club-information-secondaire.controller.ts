import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClubInformationSecondaireService } from './club-information-secondaire.service';
import { CreateClubInformationSecondaireDto } from './dto/create-club-information-secondaire.dto';
import { UpdateClubInformationSecondaireDto } from './dto/update-club-information-secondaire.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('club-information-secondaire')
@Controller('club-information-secondaire')
export class ClubInformationSecondaireController {
  constructor(
    private readonly clubInformationSecondaireService: ClubInformationSecondaireService,
  ) {}

  @Post()
  create(
    @Body()
    createClubInformationSecondaireDto: CreateClubInformationSecondaireDto,
  ) {
    return this.clubInformationSecondaireService.create(
      createClubInformationSecondaireDto,
    );
  }

  @Get()
  findAll() {
    return this.clubInformationSecondaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubInformationSecondaireService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateClubInformationSecondaireDto: UpdateClubInformationSecondaireDto,
  ) {
    return this.clubInformationSecondaireService.update(
      +id,
      updateClubInformationSecondaireDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubInformationSecondaireService.remove(+id);
  }
}
