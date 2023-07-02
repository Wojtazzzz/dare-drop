import { Module } from '@nestjs/common';
import { StreamersVotesController } from './streamers-votes.controller';
import { StreamersVotesService } from './streamers-votes.service';
import { StreamersService } from '../streamers/streamers.service';
import { PrismaService } from '../helpers/prisma.service';

@Module({
  controllers: [StreamersVotesController],
  providers: [PrismaService, StreamersVotesService, StreamersService],
})
export class StreamersVotesModule {}
