import { Body, Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearcherService } from './searcher.service';
import { QueryTradeDto } from './dto/query_trade.dto';
import { Searcher } from './entities/searcher.entity';

@ApiTags('searcher')
@Controller('searcher')
export class SearcherController {
  constructor(private readonly searcherService: SearcherService) {}

  @Get()
  @ApiOperation({ summary: 'Query trade path' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async query(@Body() queryTradeDto: QueryTradeDto): Promise<Searcher> {
    return this.searcherService.query(queryTradeDto);
  }
}
