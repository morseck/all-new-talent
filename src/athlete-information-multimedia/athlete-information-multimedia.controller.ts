import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AthleteInformationMultimediaService } from './athlete-information-multimedia.service';
import { CreateAthleteInformationMultimediaDto } from './dto/create-athlete-information-multimedia.dto';
import { UpdateAthleteInformationMultimediaDto } from './dto/update-athlete-information-multimedia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('athlete-information-multimedia')
@Controller('athlete-information-multimedia')
export class AthleteInformationMultimediaController {
  constructor(
    private readonly athleteInformationMultimediaService: AthleteInformationMultimediaService,
  ) {}

  @Post()
  create(
    @Body()
    createAthleteInformationMultimediaDto: CreateAthleteInformationMultimediaDto,
  ) {
    return this.athleteInformationMultimediaService.create(
      createAthleteInformationMultimediaDto,
    );
  }

  @Get()
  findAll() {
    return this.athleteInformationMultimediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.athleteInformationMultimediaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateAthleteInformationMultimediaDto: UpdateAthleteInformationMultimediaDto,
  ) {
    return this.athleteInformationMultimediaService.update(
      +id,
      updateAthleteInformationMultimediaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.athleteInformationMultimediaService.remove(+id);
  }
}
