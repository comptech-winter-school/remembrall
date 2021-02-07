import React, { useMemo } from 'react';
import { Route, Router, Text } from '@urban-bot/core';
import { Provider } from "react-redux";
import Help from './components/Help/Help';
import Tasks from './components/Tasks/Tasks';
import Menu from './components/Menu/Menu';
import AddTask from './components/AddTask/AddTask';
import createAppStore from "./redux/store";
import DoneTask from "./components/DoneTasks/DoneTask";
import Buttons from "./components/Buttons";


export function App() {
    const store = useMemo(createAppStore, []);
    return (
        <>  
        <Provider store={store}>
            <Router>
                <Route path="/start">
                    <Text><b>Привет</b><br/><br/>
                        Здесь ты можешь создать свой список задач. <br/>
                        Перейди в <b>"Список задач"</b>, чтобы начать.
                    </Text>
                    <Menu />
                </Route>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/help">
                    <Help />
                    <Buttons />
                </Route>
                <Route path="/tasks">
                    <Tasks />
                    <Buttons />
                </Route>
                <Route path="/addTask">
                    <AddTask />
                    <Buttons />
                </Route>
                <Route path="/doneTask">
                    <DoneTask />
                    <Buttons />
                </Route>
            </Router>
            </Provider>
        </>
    );
}
