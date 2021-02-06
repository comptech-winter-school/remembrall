import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button, useBotContext } from "@urban-bot/core";
import getTasks from "../../redux/getTasks/action";
// import addTask from "../../redux/addTasks/action";
import { setTextRange } from 'typescript';

const Tasks = () => {  
    const dispatch = useDispatch();
    // const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        dispatch(getTasks(404203742));
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
    // useText(({ text }) => {
    //     useEffect(() => {
    //         dispatch(addTask({text, id: Math.random()}))
    //     });
    // });
    const { chat } = useBotContext();
    // useCommand(({ from }) => {
    //     console.log(`Пришло сообщение от ${from.id}`);
    // });
    console.log(chat.id)

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

    // if (todos.length === 0) {
    //     return <Text>У вас нет задач</Text>;
    // }

    return(
        <>
            <ButtonGroup title={title} maxColumns={1} isNewMessageEveryRender={false}>
                {todosButtons}
            </ButtonGroup>
        </>
    );
}
export default Tasks;
