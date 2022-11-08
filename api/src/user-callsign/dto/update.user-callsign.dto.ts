import {
  IsString,
  IsOptional,
  IsDate,
} from 'class-validator';



export class UpdateUserCallsignDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 
  
  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request
  
  //  !----------!  //

  // userID should not be changed using updateUserCallsign(), end users should create a new UserCallsign
  // document. Update functionality is provided only to corect data entry errors. 
  // ONLY USE THIS IF YOU KNOW WHAT YOU'RE DOING AND WHY YOU HAVE TO DO IT THAT WAY!!!!!
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  userID: string;
  
  //  !----------!  //

  // userCallsign should not be changed using updateUserCallsign(), end users should create a new UserCallsign
  // document with the change and set the calsignEndDate to be the curent day. Update functionality is provided
  // only to corect data entry errors.
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  userCallsign: string;

  @IsOptional()
  @IsDate()
  calsignStartDate: Date;

  @IsOptional()
  @IsDate()
  calsignEndDate: Date;
}