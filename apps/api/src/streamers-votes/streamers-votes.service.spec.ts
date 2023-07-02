import { Test, TestingModule } from '@nestjs/testing';
import { StreamersVotesService } from './streamers-votes.service';

describe('StreamersVotesService', () => {
  let service: StreamersVotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamersVotesService],
    }).compile();

    service = module.get<StreamersVotesService>(StreamersVotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
