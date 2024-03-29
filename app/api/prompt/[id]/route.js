import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

// GET for reading 1 prompt by it's ID

export const GET = async (request, { params }) => {
  try {
    await connectToDb();
    const prompt = await Prompt.findById(params.id).populate('creator');
    if (!prompt) {
      return new Response('Prompt not found', { status: 404 })
    }
    return new Response(JSON.stringify(prompt), { status: 200 });

  } catch (error) {
    console.log(error)
    return new Response("Failed to fetch prompt", { status: 500 });
  }
}

// PATCH (Updating a prompt)

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDb();
    const existingPrompt = await Prompt.findById(params.id).populate('creator');

    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 })
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save()
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to update prompt", { status: 500 });
  }
}

// DELETE
export const DELETE = async (request, { params }) => {
  try {
    await connectToDb();
    await Prompt.findByIdAndRemove(params.id);
    return new Response('Prompt deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete prompt", { status: 500 });
  }
}