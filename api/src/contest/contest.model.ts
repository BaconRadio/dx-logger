import * as mongoose from 'mongoose';

export const ContestSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    contestName: { type: String, required: true },
});

export interface Contest extends mongoose.Document {
    // Back to Typescript types here
    id: string;
    contestName: string;
}