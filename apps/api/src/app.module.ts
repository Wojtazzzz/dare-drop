import { Module } from '@nestjs/common';
import { StreamersController } from './streamers/streamers.controller';
import { StreamersService } from './streamers/streamers.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [StreamersController],
  providers: [PrismaService, StreamersService],
})
export class AppModule {}
