import { Module } from '@nestjs/common';
import { StreamersModule } from './streamers/streamers.module';

@Module({
  imports: [StreamersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
