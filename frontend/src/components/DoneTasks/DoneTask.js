import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useBotContext, Text } from "@urban-bot/core";
import getTasks from "../../redux/getTasks/action";

const DoneTask = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.getTasksReducer.tasks);
    const { chat } = useBotContext(); 
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

    return (
        <Text>{ title }</Text>
    );
}

export default DoneTask;