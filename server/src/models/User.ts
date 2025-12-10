import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, unique: true, index: true },
  passwordHash: String,
  familyId: { type: Schema.Types.ObjectId, ref: 'Family' }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
