import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button, useBotContext, useText, useContact } from "@urban-bot/core";
import getTasks from "../../redux/getTasks/action";
// import addTask from "../../redux/addTasks/action";
// import { setTextRange } from 'typescript';

const Tasks = () => {  
    const dispatch = useDispatch();
    const [tasks, setTodos] = useState({});
    const { chat } = useBotContext();
    console.log(chat.id);
    
    useEffect(() => {
        dispatch(getTasks(chat.id));
    }, []);
    
    const todos = useSelector((state) => state.getTasksReducer.tasks);

    //Отметить выполненным
    function toggleTodo(toggledId) {
        const newTodos = todos.map((todo) => {
            if (todo.id === toggledId) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            }

            return todo;
        });

        setTodos(newTodos);
    }

    //зачеркнуть или нет
    const title = todos.map((todo) => (
        <>
            {todo.done ? <s>{String(todo.description)}</s> : String(todo.description)}
            <br />
        </>
    ));

    //формирование списка кнопок на вывод боту
    const todosButtons = todos.map((todo) => (
        <Button key={todo.name} onClick={() => toggleTodo(id)}>
            {String(todo.description)}
        </Button>
    ));

    return(
        <>
            <ButtonGroup title={title} maxColumns={1} isNewMessageEveryRender={false}>
                {todosButtons}
            </ButtonGroup>
        </>
    );
}
export default Tasks;
