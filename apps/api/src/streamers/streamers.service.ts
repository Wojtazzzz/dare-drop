import { Injectable } from '@nestjs/common';
import type { Prisma, Streamer } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StreamersService {
  constructor(private prisma: PrismaService) {}

  async getStreamers(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StreamerWhereUniqueInput;
    where?: Prisma.StreamerWhereInput;
    orderBy?: Prisma.StreamerOrderByWithRelationInput;
  }): Promise<Streamer[]> {
    return this.prisma.streamer.findMany(params);
  }

  async getStreamerById(
    streamerWhereUniqueInput: Prisma.StreamerWhereUniqueInput,
  ): Promise<Streamer | null> {
    return this.prisma.streamer.findUnique({
      where: streamerWhereUniqueInput,
    });
  }

  async createStreamer(data: Prisma.StreamerCreateInput): Promise<Streamer> {
    return this.prisma.streamer.create({
      data,
    });
  }
}
