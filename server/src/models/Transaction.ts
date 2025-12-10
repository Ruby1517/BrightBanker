import mongoose, { Schema } from 'mongoose';

const TxSchema = new Schema({
  kidId: { type: Schema.Types.ObjectId, ref: 'Kid' },
  jar: { type: String, enum: ['save','spend','share'] },
  type: { type: String, enum: ['deposit','spend','transfer','interest','match'] },
  amount: Number, // cents
  note: String,
}, { timestamps: true });

export const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TxSchema);
