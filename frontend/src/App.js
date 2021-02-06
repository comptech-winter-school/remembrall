import React, { useState, useMemo } from 'react';
import { Route, Router, Text, ButtonGroup, Button } from '@urban-bot/core';
import { Provider } from "react-redux";
import Help from './components/Help/Help';
import Tasks from './components/Tasks/Tasks';
import Menu from './components/Menu/Menu';
import AddTask from './components/AddTask/AddTask';
import createAppStore from "./redux/store";
import DoneTask from "./components/DoneTasks/DoneTask";

export function App() {
    const store = useMemo(createAppStore, []);
    return (
        <>  
        <Provider store={store}>
            <Menu />
            <Router>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/tasks">
                    <Tasks />
                    <Text>  
                        Нажмите на задачу, чтобы завершить ее<br/>
                        Нажмите <i>/menu</i>, чтобы перейти в меню <br/>
                        Нажмите <i>/addTask</i>, чтобы добавить задачу<br/>
                        Нажмите <i>/doneTask</i>, чтобы увидеть завершенные задачи<br/>
                    </Text>
                </Route>
                <Route path="/addTask">
                    <AddTask />
                </Route>
                <Route path="/doneTask">
                    <DoneTask />
                    <Text>  
                        Нажмите на задачу, чтобы завершить ее<br/>
                        Нажмите <i>/menu</i>, чтобы перейти в меню <br/>
                        Нажмите <i>/addTask</i>, чтобы добавить задачу<br/>
                        Нажмите <i>/tasks</i>, чтобы увидеть завершенные задачи<br/>
                    </Text>
                </Route>
            </Router>
            </Provider>
        </>
    );
}
