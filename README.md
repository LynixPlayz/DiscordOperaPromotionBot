# DiscordOperaPromotionBot
A bot that allows you to generate infinite discord promotion codes. this is accessable through requesting my api at api.alexthedev.me/discordnitro.

Here is some example javascript code that you can run in your browser to generate a discord promo code:
```javascript
const serverUrl = 'http://api.alexthedev.me/claim-rewards';

async function sendPostRequest() {
  try {
    const response = await fetch(serverUrl, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Response from server:', responseData);
  } catch (error) {
    console.error('Error sending POST request:', error.message);
  }
}

sendPostRequest();
```