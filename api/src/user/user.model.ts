import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    username: { type: String, required: true },
    name: { type: String, required: true },
});

export interface User extends mongoose.Document {
    // Back to Typescript types here
    id: string;
    username: string;
    name: string;
}