import { chatInstance as instance } from '.';

export const fetchChatMessageList = (roomId: string) => instance.get(`/chat/${roomId}`);
export const sendChatMessage = (roomId: string, content: string) =>
  instance.post(`/chat/${roomId}`, { content });
