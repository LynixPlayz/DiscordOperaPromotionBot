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

this is an example that you can run on about:blank in the console and it will start generating links and putting them on the webpage (pls dont abuse, my website doesn't have ratelimits)
```javascript
const serverUrl = 'http://api.alexthedev.me/claim-rewards';
document.body.innerHTML = "Discord links:"
async function sendPostRequest() {
  try {
    const response = await fetch(serverUrl, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const responseData = await response.json();
    document.body.innerHTML += `<a href=` + responseData["link"] + `>`+ responseData["link"] + `</a><br>`;
    console.log('Response from server:', responseData["link"]);
  } catch (error) {
    console.error('Error sending POST request:', error.message);
  }
    setTimeout(500, sendPostRequest())
}

sendPostRequest();
```