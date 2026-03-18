import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      required: false,
      enum: TAGS,
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

noteSchema.index({
  title: 'text',
  content: 'text',
});

export const Note = model('Note', noteSchema);
