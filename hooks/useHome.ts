




const messages = [
    "Vamos pra cima 🚀",
    "Foco no progresso 🔥",
    "Consistência é tudo 💪",
    "Um passo de cada vez "
  ];
  
  export const randomMessages = () => {
    return messages[Math.floor(Math.random() * messages.length)];
};