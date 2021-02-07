import React from 'react';
import { useSelector } from "react-redux";
import { Text } from "@urban-bot/core";

const DoneTask = () => {
    const todos = useSelector((state) => state.getTasksReducer.tasks);
    const title = todos.map((todo) => {
        if(todo.done) {
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