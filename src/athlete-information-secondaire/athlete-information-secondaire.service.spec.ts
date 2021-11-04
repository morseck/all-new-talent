import { Test, TestingModule } from '@nestjs/testing';
import { AthleteInformationSecondaireService } from './athlete-information-secondaire.service';

describe('AthleteInformationSecondaireService', () => {
  let service: AthleteInformationSecondaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthleteInformationSecondaireService],
    }).compile();

    service = module.get<AthleteInformationSecondaireService>(AthleteInformationSecondaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
