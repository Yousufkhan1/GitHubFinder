class Github {
  constructor() {
        this.client_id = '79e6f9b82534c7219391';
        this.client_secret = '4a113c84c6e387452596291b337426e1140e1f91';
    }

async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?
  client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}