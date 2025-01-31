// chatbot.js

// Chatbot Elements
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const closeChatbot = document.getElementById('close-chatbot');

// Toggle Chatbot Visibility
document.addEventListener('click', (e) => {
  if (e.target.matches('.chatbot-icon')) {
    chatbot.style.display = 'block';
  }
});

closeChatbot.addEventListener('click', () => {
  chatbot.style.display = 'none';
});

// Send Message to OpenAI API
chatbotInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const userMessage = chatbotInput.value;
    chatbotInput.value = '';

    // Display User Message
    chatbotMessages.innerHTML += `<div class="user-message">${userMessage}</div>`;

    // Fetch Response from OpenAI
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_OPENAI_API_KEY` // Replace with your API key
        },
        body: JSON.stringify({
          model: 'gpt-4', // Use 'gpt-3.5-turbo' if GPT-4 is unavailable
          messages: [{ role: 'user', content: userMessage }]
        })
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;

      // Display AI Message
      chatbotMessages.innerHTML += `<div class="ai-message">${aiMessage}</div>`;
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      chatbotMessages.innerHTML += `<div class="ai-message">Sorry, something went wrong. Please try again later.</div>`;
    }
  }
});