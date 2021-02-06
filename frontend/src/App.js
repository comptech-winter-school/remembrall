import React, { useState } from 'react';
import { Route, Router, Text } from '@urban-bot/core';
import Help from './components/Help/Help';
import Tasks from './components/Tasks/Tasks';
import Menu from './components/Menu/Menu';
import AddTask from './components/AddTask/AddTask';

export function App() {
    
    return (
        <>  
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
        </>
    );
}
