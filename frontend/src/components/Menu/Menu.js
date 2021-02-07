import React from 'react';
import { useRouter, ButtonGroup, Button } from '@urban-bot/core';

const Menu = () => {
    const { navigate } = useRouter();
    return (
        <ButtonGroup title="Меню" isNewMessageEveryRender={false}>
            <Button onClick={() => navigate('/tasks')}>Список задач</Button>
            <Button onClick={() => navigate('/help')}>Помощь</Button>
        </ButtonGroup>
    );
}

export default Menu;