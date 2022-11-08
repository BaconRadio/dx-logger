import {
  IsString,
  IsOptional,
  IsDate,
} from 'class-validator';



export class UpdateStationAntennaDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 
  
  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request
  
  //  !----------!  //

  // stationID should not be changed using updateStationCallsign(), end users should create a new StationCallsign
  // document. Update functionality is provided only to corect data entry errors. 
  // ONLY USE THIS IF YOU KNOW WHAT YOU'RE DOING AND WHY YOU HAVE TO DO IT THAT WAY!!!!!
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  stationID: string;
  
  //  !----------!  //

  // stationRadio should not be changed using updateStationCallsign(), end users should create a new StationCallsign
  // document with the change and set the calsignEndDate to be the curent day. Update functionality is provided
  // only to corect data entry errors.
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  stationAntenna: string;

  @IsOptional()
  @IsDate()
  antennaInstallDate: Date;

  @IsOptional()
  @IsDate()
  antennaRemovalDate: Date;

  @IsOptional()
  @IsString()
  antennaBands: string;
}