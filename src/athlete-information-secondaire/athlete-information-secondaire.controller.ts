import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AthleteInformationSecondaireService } from './athlete-information-secondaire.service';
import { CreateAthleteInformationSecondaireDto } from './dto/create-athlete-information-secondaire.dto';
import { UpdateAthleteInformationSecondaireDto } from './dto/update-athlete-information-secondaire.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('athlete-information-secondaire')
@Controller('athlete-information-secondaire')
export class AthleteInformationSecondaireController {
  constructor(
    private readonly athleteInformationSecondaireService: AthleteInformationSecondaireService,
  ) {}

  @Post()
  create(
    @Body()
    createAthleteInformationSecondaireDto: CreateAthleteInformationSecondaireDto,
  ) {
    return this.athleteInformationSecondaireService.create(
      createAthleteInformationSecondaireDto,
    );
  }

  @Get()
  findAll() {
    return this.athleteInformationSecondaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.athleteInformationSecondaireService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateAthleteInformationSecondaireDto: UpdateAthleteInformationSecondaireDto,
  ) {
    return this.athleteInformationSecondaireService.update(
      +id,
      updateAthleteInformationSecondaireDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.athleteInformationSecondaireService.remove(+id);
  }
}
