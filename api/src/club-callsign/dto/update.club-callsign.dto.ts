import {
  IsString,
  IsOptional,
  IsDate,
} from 'class-validator';



export class UpdateClubCallsignDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 
  
  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request
  
  //  !----------!  //

  // clubID should not be changed using updateClubID(), end users should create a new ClubCallsign
  // document. Update functionality is provided only to corect data entry errors. 
  // ONLY USE THIS IF YOU KNOW WHAT YOU'RE DOING AND WHY YOU HAVE TO DO IT THAT WAY!!!!!
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  clubID: string;

    //  !----------!  //

  // clubCallsign should not be changed using updateClubCallsign(), end users should create a new ClubCallsign
  // document with the change and set the calsignEndDate to be the curent day. Update functionality is provided
  // only to corect data entry errors.
  
  //  !----------!  //
  
  @IsOptional()
  @IsString()
  clubCallsign: string;

  @IsOptional()
  @IsDate()
  calsignStartDate: Date;

  @IsOptional()
  @IsDate()
  calsignEndDate: Date;
}