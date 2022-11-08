import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddStationRadioDto } from './dto';
import { UpdateStationRadioDto } from './dto';

import { StationRadio } from './station-radio.model';

@Injectable()
export class StationRadioService {
  constructor(
    @InjectModel('StationRadio') private readonly stationRadioModel: Model<StationRadio>,
  ) { }

  async newStationRadio(dto: AddStationRadioDto) {
    const newStationRadio = new this.stationRadioModel({
      stationID: dto.stationID,
      stationRadio: dto.stationRadio,
      radioInstallDate: dto.radioInstallDate,
      radioRemovalDate: dto.radioRemovalDate,
      radioBands: dto.radioBands,
    });
    const result = await newStationRadio.save();
    return result.id as string;
  }

  async getStationRadios() {
    const stationRadios = await this.stationRadioModel.find().exec();
    return stationRadios.map(radio => ({
      stationID: radio.stationID,
      stationRadio: radio.stationRadio,
      radioInstallDate: radio.radioInstallDate,
      radioRemovalDate: radio.radioRemovalDate,
      radioBands: radio.radioBands,
    }));
  }

  async getSingleStationRadio(stationRadioId: string) {
    const radio = await this.findStationRadio(stationRadioId);
    return {
      stationID: radio.stationID,
      stationRadio: radio.stationRadio,
      radioInstallDate: radio.radioInstallDate,
      radioRemovalDate: radio.radioRemovalDate,
      radioBands: radio.radioBands,
    };
  }

  async updateStationRadio(
    stationRadioId: string,
    dto: UpdateStationRadioDto,
  ) {
    const updatedStationRadio = await this.findStationRadio(stationRadioId);
    if (dto.stationID) {
      updatedStationRadio.stationID = dto.stationID;
    }
    if (dto.stationRadio) {
      updatedStationRadio.stationRadio = dto.stationRadio;
    }
    if (dto.radioInstallDate) {
      updatedStationRadio.radioInstallDate = dto.radioInstallDate;
    }
    if (dto.radioRemovalDate) {
      updatedStationRadio.radioRemovalDate = dto.radioRemovalDate;
    }
    if (dto.radioBands) {
      updatedStationRadio.radioBands = dto.radioBands;
    }
    updatedStationRadio.save();
  }

  async deleteStationRadio(stationRadioId: string) {
    const result = await this.stationRadioModel.deleteOne({ _id: stationRadioId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find radio.');
    }
  }

  private async findStationRadio(id: string): Promise<StationRadio> {
    let radio;
    try {
      radio = await this.stationRadioModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find radio.');
    }
    if (!radio) {
      throw new NotFoundException('Could not find radio.');
    }
    return radio;
  }
}