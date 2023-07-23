import { Injectable } from '@nestjs/common';
import type { Vote } from '@prisma/client';
import { PrismaService } from '../helpers/prisma.service';
import type { CreateStreamerVotePayloadDto } from './dto/create-streamer-vote.dto';

@Injectable()
export class StreamersVotesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateStreamerVotePayloadDto) {
    return this.prisma.vote.create({
      data,
    });
  }

  async checkIsFirstUserVote(ip: string, streamerId: number) {
    const count = await this.prisma.vote.count({
      where: {
        streamerId,
        ip,
      },
    });

    return !count;
  }
}
