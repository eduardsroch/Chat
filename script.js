function sendMessage() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    if (username && message) {
      const chatMessages = document.getElementById('chat-messages');
      const newMessage = document.createElement('div');
      newMessage.innerHTML = `<strong>${username}:</strong> ${message}`;
      chatMessages.appendChild(newMessage);
      document.getElementById('message').value = '';
    } else {
      alert('Por favor, preencha seu nome de usuário e mensagem.');
    }
  }
  