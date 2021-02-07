import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button, useBotContext, Text } from "@urban-bot/core";
import getTasks from "../../redux/getTasks/action";
import toggleTask from "../../redux/toggleTask/action";

const Tasks = () => {  
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.getTasksReducer.tasks);
    const { chat } = useBotContext();
    
    useEffect(() => {
        dispatch(getTasks(chat.id));
    }, [dispatch]);

    // Отметить выполненным
    function toggleClick(name) {        
        dispatch(toggleTask({ id: chat.id, name}));
    }
    //зачеркнуть или нет
    const title = todos.map((todo) => {
        if(!todo.done) {
            return (
                <>
                    {String(todo.description)}
                    <br />
                </>
            );
        }
    });
    //формирование списка кнопок на вывод боту
    const todosButtons = todos.map((todo) => {
        if(!todo.done) {
            return (
                <Button key={todo.name} onClick={() => toggleClick(todo.name)}>
                    {String(todo.description)}
                </Button>
            )
        }
    });
    
    return(
        <>
            <ButtonGroup title={"Список задач. Их нет? Значит нужно добавить"} maxColumns={1} isNewMessageEveryRender={false}>
                {todosButtons}
            </ButtonGroup>
        </>
    );
}
export default Tasks;
