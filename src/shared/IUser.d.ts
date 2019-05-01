export enum MessageType {
  PLAIN,
  URL,
  SHORT_URL,
  HTML,
  IMAGE,
  AUDIO,
  VIDEO,
  PDF,
  MARKDOWN,
}

export interface IMessage {
  messageID: string;
  timestamp: Date;
  type: MessageType;
  content: string;
  // TODO: Add file object type
}

export interface IUser {
  userId: string;
  userName: string;
  messages: IMessage[];
}