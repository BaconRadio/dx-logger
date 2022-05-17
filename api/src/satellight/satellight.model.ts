import * as mongoose from 'mongoose';

export const SatellightSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    satellightName: { type: String, required: true },
});

export interface Satellight extends mongoose.Document {
    // Back to Typescript types here
    id: string;
    satellightName: string;
}