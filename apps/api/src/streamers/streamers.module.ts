import { Module } from '@nestjs/common';
import { StreamersService } from './streamers.service';
import { StreamersController } from './streamers.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [StreamersController],
  providers: [PrismaService, StreamersService],
})
export class StreamersModule {}
