import React from 'react';
import { Text } from '@urban-bot/core';

const Menu = () => {
    return (
        <Text isNewMessageEveryRender={false}>
            <b>Меню</b><br/><br/>
            Введите <br/>
            <i>/help</i>, чтобы увидеть примеры использования <br/>
            <i>/tasks</i> бот выводит список нерешённых задач <br/>
            <i>/menu</i> перейти в меню
        </Text>
    );
}

export default Menu;