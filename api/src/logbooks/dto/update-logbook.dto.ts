import { PartialType } from '@nestjs/mapped-types';
import { CreateLogbookDto } from './create-logbook.dto';

export class UpdateLogbookDto extends PartialType(CreateLogbookDto) {}
