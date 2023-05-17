import { Schema, model, models } from 'mongoose';

const promptSchema = new Schema({
  Creator: {
    type: mongoose.Schema.Types.Object.id,
    ref: 'User'
  },
  Prompt: {
    type: String,
    required: [true, 'Prompt is required']
  },
  tag: {
    type: String,
    required: [true, 'Tag is required']
  }
})

const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt