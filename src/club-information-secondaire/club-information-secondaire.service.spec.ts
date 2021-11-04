import { Test, TestingModule } from '@nestjs/testing';
import { ClubInformationSecondaireService } from './club-information-secondaire.service';

describe('ClubInformationSecondaireService', () => {
  let service: ClubInformationSecondaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubInformationSecondaireService],
    }).compile();

    service = module.get<ClubInformationSecondaireService>(ClubInformationSecondaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
