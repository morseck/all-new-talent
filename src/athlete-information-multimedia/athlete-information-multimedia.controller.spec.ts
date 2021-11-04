import { Test, TestingModule } from '@nestjs/testing';
import { AthleteInformationMultimediaController } from './athlete-information-multimedia.controller';
import { AthleteInformationMultimediaService } from './athlete-information-multimedia.service';

describe('AthleteInformationMultimediaController', () => {
  let controller: AthleteInformationMultimediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthleteInformationMultimediaController],
      providers: [AthleteInformationMultimediaService],
    }).compile();

    controller = module.get<AthleteInformationMultimediaController>(AthleteInformationMultimediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
