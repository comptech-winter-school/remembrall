import React, { useState } from 'react';
import { Text, useBotContext, useText } from '@urban-bot/core';
import { useDispatch } from "react-redux";
import addTask from "../../redux/addTasks/action";

const AddTask = () => {
    const dispatch = useDispatch();
    const [tasks, setTodos] = useState({});
    const { chat } = useBotContext();

    useText(({text}) => {
        if(text.charAt(0) != "/") {
                const newTodo = { text, id:chat.id };
            dispatch(addTask(newTodo));
        }
    });

    return (
        <Text isNewMessageEveryRender={false}>
            Введите сообщение и отправьте его<br/>
            <i>/tasks</i> вернуться в список, чтобы увидеть новые задачи<br/>
        </Text>
    );
}

export default AddTask;