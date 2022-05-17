import * as mongoose from 'mongoose';

export const StationSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    stationName: { type: String, required: true },
    dxcc: { type: String, required: true },
    gridSquare: { type: String, required: true },
    notes: { type: String, required: true },
});

export interface Station extends mongoose.Document {
    // Back to Typescript types here
    id: string;
    stationName: string;
    dxcc: string;
    gridSquare: string;
    notes: string;
}