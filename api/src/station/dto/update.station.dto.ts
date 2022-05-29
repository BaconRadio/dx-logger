import {
  IsString,
  IsOptional
} from 'class-validator';



export class UpdateStationDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 

  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request

  @IsOptional()
  @IsString()
  stationName: string

  @IsOptional()
  @IsString()
  dxcc: string

  @IsOptional()
  @IsString()
  gridSquare: string

  @IsOptional()
  @IsString()
  notes: string
}