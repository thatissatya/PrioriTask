import React, { useState } from 'react';
import {Card} from './components/Card/Card'
import './App.css';

const data = [
    {
        id: 101,
        title: "ABC",
        category: "UX Design",
        date: '01 Aug'
    },
    {
        id: 102,
        title: "ABCDE",
        category: "UI Design",
        date: '10 Aug'
    },
    {
        id: 103,
        title: "ABCDEFG",
        category: "SYSTEM Design",
        date: '15 Aug'
    },
    {
        id: 104,
        title: "ABCDEF",
        category: "OS Design",
        date: '01 Nov'
    },
    {
        id: 101,
        title: "ABC",
        category: "UX Design",
        date: '01 Aug'
    },
    {
        id: 102,
        title: "ABCDE",
        category: "UI Design",
        date: '10 Aug'
    },
    {
        id: 103,
        title: "ABCDEFG",
        category: "SYSTEM Design",
        date: '15 Aug'
    },
    {
        id: 104,
        title: "ABCDEF",
        category: "OS Design",
        date: '01 Nov'
    }
]

function App() {


    return (
        <div className="ui-app-container">
            <div className='ui-app-container-todo'>
                {
                    data.map(item => <Card {...item}/>)
                }
            </div>
        </div>
    );
}

export default App;
