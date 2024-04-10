import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { toNumberInt, toNumberFloat } from '../helpers/toNumber';
import { MAX_VALUE } from '../../common/constants';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(toNumberInt)
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @Transform(toNumberInt)
  @IsNumber()
  @Min(0)
  @Max(MAX_VALUE)
  mileage: number;

  @Transform(toNumberFloat)
  @IsLongitude()
  lng: number;

  @Transform(toNumberFloat)
  @IsLatitude()
  lat: number;
}
