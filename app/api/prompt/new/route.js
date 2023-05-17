import { connectToDb } from '@utils/database';



export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDb();

  } catch (error) {
    console.log(error)
  }
}