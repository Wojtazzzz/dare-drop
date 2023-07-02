import { Injectable } from '@nestjs/common';
import type { Prisma, Streamer } from '@prisma/client';
import { PrismaService } from '../helpers/prisma.service';

@Injectable()
export class StreamersService {
  constructor(private prisma: PrismaService) {}

  async getStreamers(params?: {
    // for future pagination, searching etc
    skip?: number;
    take?: number;
    cursor?: Prisma.StreamerWhereUniqueInput;
    where?: Prisma.StreamerWhereInput;
    orderBy?: Prisma.StreamerOrderByWithRelationInput;
  }): Promise<Streamer[]> {
    return await this.prisma.streamer.findMany({
      ...params,
      include: {
        votes: true,
      },
    });
  }

  async getStreamerById(id: number): Promise<Streamer | null> {
    return await this.prisma.streamer.findUnique({
      where: {
        id,
      },
    });
  }

  async createStreamer(data: Prisma.StreamerCreateInput): Promise<Streamer> {
    return await this.prisma.streamer.create({
      data,
    });
  }

  async checkStreamerExists(id: number): Promise<boolean> {
    const count = await this.prisma.streamer.count({
      where: {
        id,
      },
    });

    return Boolean(count);
  }
}
