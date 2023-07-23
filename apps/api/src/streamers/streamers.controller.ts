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
import { StreamersService } from './streamers.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';

@Controller('/')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get('/streamers')
  index() {
    return this.streamersService.getStreamers();
  }

  @Get('/streamer/:id')
  async show(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    const streamer = await this.streamersService.getStreamerById(id);

    if (!streamer) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return streamer;
  }

  @Post('/streamers')
  create(@Body() data: CreateStreamerDto) {
    return this.streamersService.createStreamer(data);
  }
}
