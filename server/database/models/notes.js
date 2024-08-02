import { Schema, model } from "mongoose";

const notesSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    trim: true, // Optional: Remove leading/trailing whitespace
  },
  description: {
    type: String,
    required: true,
    trim: true, // Optional: Remove leading/trailing whitespace
  },
});

// Create the model only if it doesn't already exist
const Note = model("Note", notesSchema);

export default Note;
