import mongoose, { Schema } from 'mongoose';

const KidSchema = new Schema({
  familyId: { type: Schema.Types.ObjectId, ref: 'Family' },
  name: String,
  age: Number,
  jars: {
    save: { type: Number, default: 0 },
    spend: { type: Number, default: 0 },
    share: { type: Number, default: 0 },
  }
}, { timestamps: true });

export const Kid = mongoose.models.Kid || mongoose.model('Kid', KidSchema);
