import { Schema } from 'mongoose';
import { model } from 'mongoose';

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
      enum: [
        'Shopping',
        'Meeting',
        'Travel',
        'Health',
        'Work',
        'Finance',
        'Personal',
        'Ideas',
        'Important',
        'Todo',
      ],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);
