import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value >= 1500,
        message: 'Invalid publish year',
    },
  },
  {
    timestamps: true,
  }
);

// Dodawanie metod niestandardowych do modelu
bookSchema.statics.findByAuthor = function(author) {
  return this.find({ author });
};

export const Book = mongoose.model('Book', bookSchema);
