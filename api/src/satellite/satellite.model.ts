import * as mongoose from 'mongoose';

export const SatelliteSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    satelliteName: { type: String, required: true },
});

export interface Satellite extends mongoose.Document {
    // Back to Typescript types here
    id: string;
    satelliteName: string;
}