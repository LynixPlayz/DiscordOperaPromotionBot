const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(cors());
// Use bodyParser to parse JSON requests
app.use(bodyParser.json());

class DiscordPromotion {
  constructor() {
    this.DISCORD_BASE_URL = "https://discord.com/billing/partner-promotions";
    this.PROMOTION_ID = "1180231712274387115";
    this.DISCORD_API_URL = "https://api.discord.gx.games/v1/direct-fulfillment";
  }

  generateAndShowPromoUrl = async (t) => {
    const e = await this.initRequestToDiscord(t);
    const r = `${this.DISCORD_BASE_URL}/${this.PROMOTION_ID}/${e.token}`;
    return e ? r : null;
  };

  initRequestToDiscord = async (t) => {
    const e = {
      partnerUserId: t
    };
    try {
      const response = await axios.post(this.DISCORD_API_URL, e);

      if (!response.data) {
        throw new Error(`Network response was not ok`);
      }

      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  generateUUID = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

  claimRewards = async () => {
    const t = this.generateUUID();
    return await this.generateAndShowPromoUrl(t);
  };
}

// Create an instance of the DiscordPromotion class
const discordPromotion = new DiscordPromotion();

// Define a route to handle the claimRewards logic
app.post('/claim-rewards', async (req, res) => {
try {
    const link = await discordPromotion.claimRewards();
    if (link) {
    res.status(200).json({ link });
    } else {
    res.status(500).json({ error: 'Failed to generate link' });
    }
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
}
});

// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
