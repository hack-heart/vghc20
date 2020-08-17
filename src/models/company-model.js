import mongoose, { Schema } from 'mongoose';

const CompanySchema = new Schema({
  name: String,
  contacts: Number,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const CompanyModel = mongoose.model('Company', CompanySchema);

export default CompanyModel;
