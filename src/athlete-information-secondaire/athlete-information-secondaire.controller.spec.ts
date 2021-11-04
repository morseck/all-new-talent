import { Test, TestingModule } from '@nestjs/testing';
import { AthleteInformationSecondaireController } from './athlete-information-secondaire.controller';
import { AthleteInformationSecondaireService } from './athlete-information-secondaire.service';

describe('AthleteInformationSecondaireController', () => {
  let controller: AthleteInformationSecondaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthleteInformationSecondaireController],
      providers: [AthleteInformationSecondaireService],
    }).compile();

    controller = module.get<AthleteInformationSecondaireController>(AthleteInformationSecondaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
