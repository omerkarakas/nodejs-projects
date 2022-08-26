import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  // since we have transformOptions: {     enableImplicitConversion: true, ...
  // we may completely omit the Type decorator instead of using @Type(() => Number)

  @IsOptional()
  @IsPositive()
  offset: number;
}
