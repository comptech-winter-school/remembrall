import React, { useState, useMemo } from 'react';
import { Route, Router, Text } from '@urban-bot/core';
import { Provider } from "react-redux";
import Help from './components/Help/Help';
import Tasks from './components/Tasks/Tasks';
import Menu from './components/Menu/Menu';
import AddTask from './components/AddTask/AddTask';
import createAppStore from "./redux/store";

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
                <Route path="/list">
                    <Tasks />
                    <Text>
                        Введите <i>/menu</i> перейти в меню <br/>
                        Нажмите на задачу, чтобы завершить ее <br/>
                        Нажмите <i>/addTask</i>, чтобы добавить задачу
                    </Text>
                </Route>
                <Route path="/addTask">
                    <AddTask />
                </Route>
            </Router>
            </Provider>
        </>
    );
}
