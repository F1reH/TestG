// script.js

const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const discordWebhookURL = 'https://discord.com/api/webhooks/1176898444196065320/D0vNM-5BezELu3vvXB5vIMkiaNPWEV55RS12-wp7ObMNV4UBMtbLWWX7jEBdxXi3Cwri'; // Replace with your actual Discord webhook URL

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const signupTime = new Date().toISOString();
  const userAgent = navigator.userAgent;

  // Process sign-up data (e.g., save to database, send email confirmation)

  sendDiscordWebhookMessage(username, signupTime, userAgent);
});

function sendDiscordWebhookMessage(username, signupTime, userAgent) {
  const message = {
    content: `Username: ${username}\nSignup Time: ${signupTime}\nUser's Browser: ${userAgent}`
  };

  const Discord = require('discord.js');
  const client = new Discord.WebhookClient(discordWebhookURL);

  client.send(message).catch((error) => {
    console.error('Error sending Discord webhook message:', error);
  });
}
