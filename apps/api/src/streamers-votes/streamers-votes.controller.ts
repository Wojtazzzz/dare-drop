import {
  Controller,
  HttpException,
  HttpStatus,
  Ip,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { StreamersVotesService } from './streamers-votes.service';
import { StreamersService } from '../streamers/streamers.service';

@Controller('/streamers')
export class StreamersVotesController {
  constructor(
    private readonly streamersVotesService: StreamersVotesService,
    private readonly streamersService: StreamersService,
  ) {}

  @Post('/:streamerId/vote')
  async create(
    @Param(
      'streamerId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    streamerId: number,
    @Ip() ip: string,
  ) {
    const isStreamerExists = await this.streamersService.checkStreamerExists(
      streamerId,
    );

    if (!isStreamerExists) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const isFirstStreamerVote =
      await this.streamersVotesService.checkIsFirstUserVote(ip, streamerId);

    if (!isFirstStreamerVote) {
      throw new HttpException(
        'You have already voted for this streamer',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return await this.streamersVotesService.create({
      ip,
      streamerId,
    });
  }
}
