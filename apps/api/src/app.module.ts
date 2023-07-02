import { Module } from '@nestjs/common';
import { StreamersModule } from './streamers/streamers.module';
import { StreamersVotesModule } from './streamers-votes/streamers-votes.module';

@Module({
  imports: [StreamersModule, StreamersVotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
