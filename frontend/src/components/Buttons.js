import React from 'react';
import { Text, useRouter, ButtonGroup, Button } from '@urban-bot/core';

const Buttons = () => {
    const { navigate } = useRouter();
    return (
        <ButtonGroup title="Навигация" maxColumns={2}>
            <Button onClick={() => navigate('/menu')}>Меню</Button>
            <Button onClick={() => navigate('/tasks')}>Список задач</Button>
            <Button onClick={() => navigate('/addTask')}>Добавить задачу</Button>
            <Button onClick={() => navigate('/doneTask')}>Список завершенных задач</Button>
        </ButtonGroup>
    );
}

export default Buttons;