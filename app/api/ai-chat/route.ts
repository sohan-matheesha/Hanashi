import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AI tutor is not configured. GEMINI_API_KEY is missing on the server.",
        },
        { status: 500 },
      );
    }

    const { message } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const prompt = `
You are Hanashi AI Tutor, an AI assistant for a beginner Japanese language learning platform.

The learner may type in Sinhala, English, or Japanese.

Your task:
- If the learner types in Sinhala or English, translate the idea into natural beginner-friendly Japanese.
- If the learner types in Japanese, correct the sentence and provide a more natural beginner-friendly version.
- Explain the answer simply.
- Keep the answer short and useful for a beginner.
- Use simple English for explanation unless the learner asks for Sinhala.
- If the learner asks in Sinhala, include a simple Sinhala explanation.

Always answer using this exact format:

Japanese:
Romaji:
English Meaning:
Explanation:
Practice Tip:

Rules:
- Do not add extra headings.
- Do not write long paragraphs.
- Do not use advanced Japanese unless needed.
- Keep the Japanese suitable for beginner / JLPT N5 level where possible.
- If the input is not related to Japanese learning, politely guide the learner back to Japanese practice.

Learner message:
"${message.trim()}"
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    const reply = response.text?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "AI tutor did not return a response." },
        { status: 500 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Chat Error:", error);

    return NextResponse.json(
      { error: "Something went wrong with the AI tutor." },
      { status: 500 },
    );
  }
}