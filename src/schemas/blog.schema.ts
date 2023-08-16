import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  date: Date,
  author: String,
  description: String,
});
