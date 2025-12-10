import mongoose, { Schema } from 'mongoose';

const FamilySchema = new Schema({
  name: String,
  parentIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

export const Family = mongoose.models.Family || mongoose.model('Family', FamilySchema);
