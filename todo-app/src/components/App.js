import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import TodoEdit from './TodoEdit';

const App = () => {
    return (
        <div className="app ui container">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/edit/:todoId'} element={<TodoEdit/>}/>
            </Routes>
        </div>
    );
};

export default App;
