import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button, useBotContext, useText, useContact, Text } from "@urban-bot/core";
import getTasks from "../../redux/getTasks/action";
import toggleTask from "../../redux/toggleTask/action";
// import addTask from "../../redux/addTasks/action";
// import { setTextRange } from 'typescript';

const Tasks = () => {  
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.getTasksReducer.tasks);
    
    const [tasks, setTodos] = useState(todos);
    const { chat } = useBotContext();
    
    useEffect(() => {
        dispatch(getTasks(chat.id));
    }, [dispatch]);

    // Отметить выполненным
    function toggleTodo(toggledId) {   
        const newTodos = tasks.map((task) => {
            console.log(`start ${task.done} ////////`)
            if (task.name === toggledId) {
                return {
                    ...task,
                    done: !task.done,
                };
            }
            console.log(`end ${task.done} ////////`)
            return task;
        });
        console.log("Hello?");
        setTodos(newTodos);
    }
    function toggleClick(name) {
        title();
        dispatch(toggleTask({ id: chat.id, name, description}));
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
                <Button key={todo.name} onClick={() => toggleClick(todo.name, todo.description)}>
                    {String(todo.description)}
                </Button>
            )
        }
    });

    return(
        <>
            <ButtonGroup title={"Список задач"} maxColumns={1} isNewMessageEveryRender={false}>
                {todosButtons}
            </ButtonGroup>
        </>
    );
}
export default Tasks;
