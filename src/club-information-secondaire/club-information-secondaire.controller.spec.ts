import { Test, TestingModule } from '@nestjs/testing';
import { ClubInformationSecondaireController } from './club-information-secondaire.controller';
import { ClubInformationSecondaireService } from './club-information-secondaire.service';

describe('ClubInformationSecondaireController', () => {
  let controller: ClubInformationSecondaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubInformationSecondaireController],
      providers: [ClubInformationSecondaireService],
    }).compile();

    controller = module.get<ClubInformationSecondaireController>(ClubInformationSecondaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
