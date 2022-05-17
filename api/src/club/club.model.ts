import * as mongoose from 'mongoose';

export const ClubSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    clubName: { type: String, required: true },
});

export interface Club extends mongoose.Document {
    // Back to Typescript types here
    id: string;
    clubName: string;
}