import { ApiProperty } from '@nestjs/swagger';

export class Searcher {
  /**
   * The pair of the Searcher
   * @example KSM-MOVR
   */
  pair: string;

  @ApiProperty({
    example: 'OK',
    description: 'Searcher result status',
  })
  status: string;
}
