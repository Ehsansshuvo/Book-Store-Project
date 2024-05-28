import mongoose from 'mongoose';
// Schema for creating Book model
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Number,
    required: true
  },
  details:{
    type: String,
    required: true
  },
  entryDate: {
    type: Date,
    default: Date.now
  }
});

// Create the Book model
const Books = mongoose.model('Books', bookSchema);

// Export the Book model
export default Books;
