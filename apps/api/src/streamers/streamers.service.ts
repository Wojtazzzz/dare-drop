import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
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
  }) {
    return await this.prisma.streamer.findMany({
      ...params,
      orderBy: {
        votes: {
          _count: 'desc',
        },
      },
      include: {
        votes: true,
      },
    });
  }

  getStreamerById(id: number) {
    return this.prisma.streamer.findUnique({
      where: {
        id,
      },
    });
  }

  createStreamer(data: Prisma.StreamerCreateInput) {
    return this.prisma.streamer.create({
      data,
    });
  }

  async checkStreamerExists(id: number) {
    const count = await this.prisma.streamer.count({
      where: {
        id,
      },
    });

    return Boolean(count);
  }
}
