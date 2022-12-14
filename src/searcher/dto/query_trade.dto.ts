import { IsString } from 'class-validator';

export class QueryTradeDto {
  @IsString()
  readonly pair: string;
}
