import { GoogleGenAI, Type } from "@google/genai";
import { ResearchProject, Competitor } from "../types";

export const generateResearchInsights = async (project: ResearchProject) => {
    const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });
    const prompt = `Analyze: ${project.businessProblem}. Competitors: ${JSON.stringify(project.competitors)}. Generate Markdown report.`;
    try {
          const response = await ai.models.generateContent({
                  model: 'gemini-1.5-pro',
                  contents: prompt
          });
          return response.text;
    } catch (error) {
          return "Error";
    }
};

export const fetchOnlineReviews = async (name: string) => {
    return null;
};

export const suggestCompetitors = async (problem: string) => {
    return [];
};
