import React, { useState } from 'react';
import { Route, Router, Text } from '@urban-bot/core';
import Help from './components/Help/Help';
import Tasks from './components/Tasks/Tasks';
import Menu from './components/Menu/Menu';

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
                    <Text>Отправьте сообщение и оно станет вашей задачей<br/>
                        Введите <i>/menu</i> перейти в меню<br/>
                        Нажмите на задачу, чтобы завершить ее
                    </Text>
                </Route>
            </Router>
        </>
    );
}
