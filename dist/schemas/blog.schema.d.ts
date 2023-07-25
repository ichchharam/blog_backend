import * as mongoose from 'mongoose';
export declare const BlogSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string;
    description?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title?: string;
    description?: string;
}>> & Omit<mongoose.FlatRecord<{
    title?: string;
    description?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
