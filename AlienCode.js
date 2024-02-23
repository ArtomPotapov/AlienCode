// Function to save messages to local storage
function saveMessageToLocalStorage(message) {
  // Get existing messages from local storage or initialize an empty array
  const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];

  // Add the new message to the array
  existingMessages.push(message);

  // Save the updated messages array back to local storage
  localStorage.setItem('messages', JSON.stringify(existingMessages));
}

// Function to load messages from local storage
function loadMessagesFromLocalStorage() {
  const messageList = document.getElementById('messageList');

  // Get existing messages from local storage
  const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];

  // Display existing messages in the messageList
  existingMessages.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerText = message;
    messageList.appendChild(messageDiv);
  });
}

// Load existing messages when the page loads
document.addEventListener('DOMContentLoaded', loadMessagesFromLocalStorage);

// Function to delete all messages
function deleteAllMessages() {
  const messageList = document.getElementById('messageList');

  // Remove all messages from the DOM
  messageList.innerHTML = '';

  // Clear local storage
  localStorage.removeItem('messages');
}

// Function to post messages
function postMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageList = document.getElementById('messageList');

  if (messageInput.value.trim() !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerText = messageInput.value;
    messageList.appendChild(messageDiv);
    messageInput.value = '';

    // Save the message to local storage
    saveMessageToLocalStorage(messageDiv.innerText);
  }
}
