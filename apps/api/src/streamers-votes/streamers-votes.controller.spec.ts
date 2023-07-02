import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { StreamersVotesController } from './streamers-votes.controller';

describe('StreamersVotesController', () => {
  let controller: StreamersVotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamersVotesController],
    }).compile();

    controller = module.get<StreamersVotesController>(StreamersVotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
