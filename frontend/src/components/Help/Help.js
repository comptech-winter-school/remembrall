import React from 'react';
import { Text } from '@urban-bot/core';

const Help = () => {
    
    return (
        <Text>
            Введите <br/>
            <i>/tasks</i> бот выводит список нерешённых задач <br/>
            <i>/doneTask</i>, чтобы добавить задачу<br/>
            <i>/addTask</i>, чтобы добавить задачу<br/>
            <i>/menu</i> перейти в меню
        </Text>
    );
}

export default Help;