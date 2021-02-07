import React from 'react';
import { Text, useRouter, ButtonGroup, Button } from '@urban-bot/core';

const Menu = () => {
    const { navigate } = useRouter();
    return (
        // <Text isNewMessageEveryRender={false}>
        //     <b>Меню</b><br/><br/>
        //     Введите <br/>
        //     <i>/help</i>, чтобы увидеть примеры использования <br/>
        //     <i>/tasks</i> бот выводит список нерешённых задач <br/>
        //     <i>/menu</i> перейти в меню
        // </Text>
        <ButtonGroup title="Меню" isNewMessageEveryRender={false}>
            <Button onClick={() => navigate('/help')}>Помощь</Button>
            <Button onClick={() => navigate('/tasks')}>Список задач</Button>
        </ButtonGroup>
    );
}

export default Menu;