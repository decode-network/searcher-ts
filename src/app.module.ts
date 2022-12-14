import { Module } from '@nestjs/common';
import { SearcherModule } from './searcher/searcher.module';

@Module({
  imports: [SearcherModule],
})
export class AppModule {}
