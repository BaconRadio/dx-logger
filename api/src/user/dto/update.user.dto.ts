import {
  IsString,
  IsOptional
} from 'class-validator';



export class UpdateUserDto {

  // The validation decorators set the request to a 400 error response when
  // the datatype does not match what is required 
  
  // The decorator @isOptional() bypases validation checks when 
  // the item isn't provided in the request
  
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  name: string;
}