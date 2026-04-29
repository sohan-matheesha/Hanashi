import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are Hanashi AI Tutor, an AI assistant for a Japanese language learning platform.

The student may type in Sinhala, English, or Japanese.

Always answer using this exact format:

Japanese:
Romaji:
English Meaning:
Explanation:

Rules:
- If the input is Sinhala or English, translate it into natural beginner-friendly Japanese.
- If the input is Japanese, correct it and give a natural Japanese sentence.
- Keep the Japanese sentence beginner-friendly.
- Keep the explanation short and simple.
- Do not write long paragraphs.
- Do not add extra headings other than the exact format above.

Student message:
"${message}"
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("AI Chat Error:", error);

    return NextResponse.json(
      { error: "Something went wrong with AI chat" },
      { status: 500 }
    );
  }
}