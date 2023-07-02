import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import type { Streamer } from '@prisma/client';
import { StreamersService } from './streamers.service';

@Controller('/')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get('/streamers')
  index(): Promise<Streamer[]> {
    return this.streamersService.getStreamers();
  }

  @Get('/streamer/:id')
  async show(@Param('id') id: string): Promise<Streamer> {
    const streamer = await this.streamersService.getStreamerById({
      id: Number(id),
    });

    if (!streamer) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return streamer;
  }
}
