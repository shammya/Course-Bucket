import { Files } from "./Files";

export class Message {
  id: number;
  senderId: string;
  receiverId: string;
  file: Files;
}
export class MessageData {
  username: string;
  fullName: string;
  photo: string;
  messages: Message[];
}
export class Conversation {
  message: Message;
  fullName: string;
  firstName: string;
  photo: string;
}
