import type { IChatMessage } from '../interface/chat-message.interface';

const listaDeMensajesIncial: IChatMessage[] = [
  {
    id: new Date().getTime(),
    fromMe: true,
    message: 'Hola, todo bien?',
  },
  {
    id: new Date().getTime(),
    fromMe: false,
    message: 'Yes',
    imageSrc: 'https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif',
  },
];

export { listaDeMensajesIncial };
