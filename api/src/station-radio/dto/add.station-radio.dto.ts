import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddStationRadioDto {

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
  stationRadio: string;

  @IsNotEmpty()
  @IsDate()
  radioInstallDate: Date;

  @IsOptional()
  @IsDate()
  radioRemovalDate: Date;

  @IsNotEmpty()
  @IsString()
  radioBands: string;
}