import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class AddSatelliteDto {
  
    // The validation decorators set the request to a 400 error response when
    // the datatype does not match what is required 
  
    // The decorator @isNotEmpty() checks that the item is always present in the request
  
    @IsNotEmpty()
    @IsString()
    satelliteName: string;
  }