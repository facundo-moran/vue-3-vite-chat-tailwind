import { ref } from 'vue';

import { listaDeMensajesIncial } from '../data/chat-message.data';

import { YES_NO_API_URL } from '../chat.constant';

import type { IChatMessage } from '../interface/chat-message.interface';
import type { IYesNoApiResponse } from '../interface/yes-no-api.interface';
import { sleepOneSecond } from '../helpers/sleep';

const useChat = () => {
  /*
  ⏬ VARIABLES
  */
  // const listaDeMensajes = ref<IChatMessage[]>(listaDeMensajesIncial);
  const listaDeMensajes = ref<IChatMessage[]>([]);

  /*
  ⏬` FUNCIONALIDADES
  */

  const getYesNoResponseWithGif = async () => {
    const response = await fetch(YES_NO_API_URL);
    const data: IYesNoApiResponse = await response.json();

    return data;
  };

  const onInboxMessageFromMe = async (message: string) => {
    if (!message) return;

    const newMessageToAdd: IChatMessage = {
      id: new Date().getTime(),
      fromMe: true,
      message,
    };

    listaDeMensajes.value.push(newMessageToAdd);

    /*
      Logica del chat para que funcione segun la API de yes no.

      Se desea que solo se active una peticion al API cuando el
      nuevo mensaje ingresado finalize con signo de pregunta, en caso
      contrario no sucedera nada mas.
      */
    const signoInterrogacion = '?';

    if (!message.endsWith(signoInterrogacion)) return;

    try {
      await sleepOneSecond();
      const { answer, image } = await getYesNoResponseWithGif();

      const newMessageToAdd: IChatMessage = {
        id: new Date().getTime(),
        fromMe: false,
        message: answer.trim().concat('!!!'),
        imageSrc: image,
      };

      listaDeMensajes.value.push(newMessageToAdd);
    } catch (error) {
      console.error(error);
    }
  };

  /*
  ⏬` EXPORT
  */

  return {
    /*
   ⏬ VARIABLES
    */
    listaDeMensajes,
    /*
    ⏬` FUNCIONALIDADES
    */
    onInboxMessageFromMe,
  };
};

export { useChat };
