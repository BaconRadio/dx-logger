import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddStationAntennaDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 

  // The decorator @isNotEmpty() checks that the item is always present in the request

  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request

  @IsNotEmpty()
  @IsString()
  stationID: string;
  
  @IsNotEmpty()
  @IsString()
  stationAntenna: string;

  @IsNotEmpty()
  @IsDate()
  antennaInstallDate: Date;

  @IsOptional()
  @IsDate()
  antennaRemovalDate: Date;

  @IsNotEmpty()
  @IsString()
  antennaBands: string;
}