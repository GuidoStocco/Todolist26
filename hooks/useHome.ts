import { useState } from "react";






const messages = [
    "Vamos pra cima 🚀",
    "Foco no progresso 🔥",
    "Consistência é tudo 💪",
    "Um passo de cada vez "
  ];
  
  export const randomMessages = () => {
    return messages[Math.floor(Math.random() * messages.length)];
};



export const useModal = () => {
    const [modal,setModal] = useState<boolean>(false);


    const handleModal = () => {
      setModal(!modal)
    }


    return{
      handleModal,
      modal
    }
}