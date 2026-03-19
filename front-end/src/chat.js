const chatBackBtn = document.querySelector('#chat-back-btn');
chatBackBtn.addEventListener('click', function() {
  window.history.back();
});


const chatSendBtn = document.querySelector('#chat-send-btn');
const chatMessageInput = document.querySelector('#chat-message-input');
const chatMessageList = document.querySelector('#chat-message-list');

chatSendBtn.addEventListener('click', function() {
  const messageText = chatMessageInput.value.trim();
  if (messageText !== '') {
    const messageItem = document.createElement('li');
    messageItem.classList.add('sent-message');

    const messageContent = document.createElement('p');
    messageContent.classList.add('chat-message-content');
    messageContent.textContent = messageText;
    const messageBox = document.createElement('div');
    messageBox.classList.add('chatbox-message');
    messageBox.appendChild(messageContent);
    messageItem.appendChild(messageBox);

    const profilePicture = document.createElement('img');
    profilePicture.src = 'public/ppgojo.jpg';
    profilePicture.alt = 'Photo de profil';
    profilePicture.classList.add('chat-message-profile-picture');
    messageItem.appendChild(profilePicture);

    chatMessageList.appendChild(messageItem);
    chatMessageInput.value = '';
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    chatSendBtn.click();
  }
} );