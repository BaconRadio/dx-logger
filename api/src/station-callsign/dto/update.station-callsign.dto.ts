import {
  IsString,
  IsOptional,
  IsDate,
} from 'class-validator';



export class UpdateStationCallsignDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 
  
  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request
  
  //  !----------!  //

  // stationCallsign should not be changed using updateStationCallsign(), end users should create a new StationCallsign
  // document with the change and set the calsignEndDate to be the curent day. Update functionality is provided
  // only to corect data entry errors.
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  stationCallsign: string;

  @IsOptional()
  @IsDate()
  calsignStartDate: Date;

  @IsOptional()
  @IsDate()
  calsignEndDate: Date;
}