import { Injectable } from '@nestjs/common';
import { QueryTradeDto } from './dto/query_trade.dto';
import { Searcher } from './entities/searcher.entity';

@Injectable()
export class SearcherService {
  query(trade: QueryTradeDto): Searcher {
    const searcher = new Searcher();
    searcher.pair = trade.pair;
    searcher.status = 'OK';
    return searcher;
  }
}
