import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    throw new Error("API Key is missing. Please check your environment configuration.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateChatResponse = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Construct a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are the "Humanoid AI Assistant", a knowledgeable and friendly expert on the Humanoid Robotics Book.
        
        Style Guide:
        - Be conversational, encouraging, and clear.
        - Use standard Markdown formatting (bold, lists, code blocks) to make answers readable.
        - You are helpful and eager to explain complex robotics concepts simply.
        
        Knowledge Base:
        - Chapter 1: Intro to Humanoids (Bipedalism, History)
        - Chapter 2: The Brain (Transformers, Neural Nets)
        - Chapter 3: Sensors (LiDAR, IMU)
        - Chapter 4: Locomotion (ZMP, MPC)
        - Chapter 5: Ethics (Asimov, Safety)
        - Chapter 6: Building (ROS 2, Simulation)
        - Chapter 7: CLI (Terminal control)
        
        Answer questions directly based on this context.`,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm thinking, but I didn't have a response ready.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my neural network right now. Please try again in a moment.";
  }
};