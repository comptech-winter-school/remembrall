import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button, useText, Text } from "@urban-bot/core";
import getTasks from "../../redux/getTasks/action";
import addTask from "../../redux/addTasks/action";

const Tasks = () => {  
    const dispatch = useDispatch();
    // const [todos, setTodos] = useState([]);

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    const todos = useSelector((state) => state.tasks);

    
    // function addTodo(text) {
    //     const newTodo = { text, id: Math.random(), isCompleted: false };
    //     setTodos([...todos, newTodo]);
    // }

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
    useText(({ text }) => {
        useEffect(() => {
            dispatch(addTask({text, id: Math.random()}))
        });
    });

    //зачеркнуть или нет
    const title = todos.map((todo) => (
        <>
            {todo.isCompleted ? <s>{todo.text}</s> : todo.text}
            <br />
        </>
    ));

    //формирование списка кнопок на вывод боту
    const todosButtons = todos.map(({ text, id }) => (
        <Button key={id} onClick={() => toggleTodo(id)}>
            {text}
        </Button>
    ));

    if (todos.length === 0) {
        return <Text>У вас нет задач</Text>;
    }

    return(
        <>
            <ButtonGroup title={title} maxColumns={1} isNewMessageEveryRender={false}>
                {todosButtons}
            </ButtonGroup>
        </>
    );
}
export default Tasks;
