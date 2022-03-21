import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLogbookDto } from './dto/create-logbook.dto';
import { UpdateLogbookDto } from './dto/update-logbook.dto';
import { Logbook, LogbookDocument } from './schemas/logbook.schema';
import { Model } from 'mongoose';

@Injectable()
export class LogbooksService {

  constructor(
    @InjectModel(Logbook.name) private readonly logbookModel: Model<LogbookDocument>
  ) {}

  create(createLogbookDto: CreateLogbookDto) {
    return this.logbookModel.create(createLogbookDto);
  }

  async findAll() {
    return this.logbookModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} logbook`;
  }

  update(id: number, updateLogbookDto: UpdateLogbookDto) {
    return `This action updates a #${id} logbook`;
  }

  remove(id: number) {
    return `This action removes a #${id} logbook`;
  }
}
