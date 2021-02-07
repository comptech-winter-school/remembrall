import React from 'react';
import { Text, useBotContext, useText } from '@urban-bot/core';
import { useDispatch, useSelector } from "react-redux";
import addTask from "../../redux/addTasks/action";

const AddTask = () => {
    const dispatch = useDispatch();
    const task = useSelector((state) => state.addTasksReducer.tasks);
    const { chat } = useBotContext();
    // console.log(`useSelector ${task}`);
    useText(({text}) => {
        if(text.charAt(0) != "/") {
                const newTodo = { text, id:chat.id };
            dispatch(addTask(newTodo));
        }
    });

    return (
        <>
            { (task != "") && <Text>Добавлено</Text> }
            <Text isNewMessageEveryRender={false}>
                Введите сообщение и отправьте его<br/>
                Перейдите <b>Список задач</b>, чтобы увидеть новые задачи<br/>
            </Text>
  
        </>
    );
}

export default AddTask;