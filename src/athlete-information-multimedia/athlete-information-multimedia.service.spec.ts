import { Test, TestingModule } from '@nestjs/testing';
import { AthleteInformationMultimediaService } from './athlete-information-multimedia.service';

describe('AthleteInformationMultimediaService', () => {
  let service: AthleteInformationMultimediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthleteInformationMultimediaService],
    }).compile();

    service = module.get<AthleteInformationMultimediaService>(AthleteInformationMultimediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
