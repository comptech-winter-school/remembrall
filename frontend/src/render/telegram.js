import React from 'react';
import { Provider } from "react-redux";
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';
import store from "./../redux/store";

dotenv.config();

const { TELEGRAM_TOKEN, PORT } = process.env;

const isDevelopment = process.env.NODE_ENV === 'development';

if (!TELEGRAM_TOKEN) {
    throw new Error('Provide TELEGRAM_TOKEN to .env https://remembrallbot.herokuapp.com');
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: TELEGRAM_TOKEN,
});

render(
    <Root bot={urbanBotTelegram} port={PORT ? Number(PORT) : undefined}>
        <Provider store={store}>
            <App />
        </Provider>
    </Root>,
    () => console.log(`telegram bot has started ${urbanBotTelegram.options.token}`),
);
