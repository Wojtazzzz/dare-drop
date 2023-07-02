import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import type { Streamer } from '@prisma/client';
import { StreamersService } from './streamers.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';

@Controller('/')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get('/streamers')
  async index(): Promise<Streamer[]> {
    return await this.streamersService.getStreamers();
  }

  @Get('/streamer/:id')
  async show(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<Streamer> {
    const streamer = await this.streamersService.getStreamerById(id);

    if (!streamer) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return streamer;
  }

  @Post('/streamers')
  async create(@Body() data: CreateStreamerDto): Promise<Streamer> {
    return await this.streamersService.createStreamer(data);
  }
}
