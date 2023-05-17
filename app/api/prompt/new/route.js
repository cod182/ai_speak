import Prompt from '@models/prompt';
import { connectToDb } from '@utils/database';


export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDb();
    const newPrompt = new Prompt({
      Creator: userId,
      prompt,
      tag
    })
    await new Prompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    return new Response('Failed to create new prompt', { status: 500 })
  }
}