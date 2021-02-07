import React from 'react';
import { Text, useBotContext, useText } from '@urban-bot/core';
import { useDispatch } from "react-redux";
import addTask from "../../redux/addTasks/action";

const AddTask = () => {
    const dispatch = useDispatch();
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
            Перейдите <b>Список задач</b>, чтобы увидеть новые задачи<br/>
        </Text>
    );
}

export default AddTask;