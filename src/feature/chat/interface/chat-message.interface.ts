export interface IChatMessage {
  id: number;
  message: string;
  fromMe: boolean;
  imageSrc?: string;
}
