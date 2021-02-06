import React, { useState } from 'react';
import { Text, useBotContext, useText } from '@urban-bot/core';
import { useDispatch } from "react-redux";
import addTask from "../../redux/addTasks/action";


const AddTask = () => {
    const dispatch = useDispatch();
    const [tasks, setTodos] = useState({});
    const { chat } = useBotContext();
    console.log(chat.id);

    // function addTodo(text) {      
    //     useContact(({ userId }) => {
    //         console.log(`user id ${userId}`);
    //         const newTodo = { text, id:userId };
    //     dispatch(addTask(newTodo));
    //     });
    // }
    useText(({text}) => {
        if(text.charAt(0) != "/") {
            console.log(`It is message ${text}`);
                const newTodo = { text, id:chat.id };
            dispatch(addTask(newTodo));
        }
    });


    return (
        <Text isNewMessageEveryRender={false}>
            Введите сообщение и отправьте его<br/>
            <i>/list</i> вернуться в список <br/>
        </Text>
    );
}

export default AddTask;