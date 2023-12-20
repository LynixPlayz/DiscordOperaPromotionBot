this.DISCORD_BASE_URL = "https://discord.com/billing/partner-promotions"
this.PROMOTION_ID = "1180231712274387115"
this.DISCORD_API_URL = "https://api.discord.gx.games/v1/direct-fulfillment"
this.generateAndShowPromoUrl = async t=>{
    const e = await this.initRequestToDiscord(t)
      , r = `${this.DISCORD_BASE_URL}/${this.PROMOTION_ID}/${e.token}`;
    e && window.open(r, "_blank")
},
this.initRequestToDiscord = async t=>{
    const e = {
        partnerUserId: t
    };
    try {
        const t = await fetch(this.DISCORD_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!t.ok)
            throw this.showError(),
            new Error(`Network response was not ok: ${t.statusText}`);
        return await t.json()
    } catch (t) {
        this.showError(),
        s.error("Error:", t)
    }
},
this.generateUUID = ()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
    const e = 16 * Math.random() | 0;
    return ("x" === t ? e : 3 & e | 8).toString(16)
})),
this.claimRewards = async()=>{
    const t = this.generateUUID();
    this.generateAndShowPromoUrl(t)
}
await this.claimRewards();