import { model, Schema } from "mongoose";

const userSchema = new Schema({
  googleId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

const User = model('User', userSchema);


export default User;