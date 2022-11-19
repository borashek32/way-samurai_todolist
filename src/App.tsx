import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true}, //0
        {id: 2, title: "JS", isDone: true},//1
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "HTML&CSS1", isDone: true}, //0
        {id: 5, title: "JS1", isDone: true},//1
        {id: 6, title: "ReactJS1", isDone: false}
    ])

    const [filterValueKey,setFilterValueKey]=useState('All')

    const removeTask = (taskID: number) => {
        setTasks1(tasks1.filter(el => el.id !== taskID))
    }

    const filterTasks = (filterKey: string) => {
        setFilterValueKey(filterKey)
    }

    const FooFilter = () => {
        let filteredTasks = tasks1
        if(filterValueKey === 'Active'){
            filteredTasks = tasks1.filter(el => !el.isDone)
        }
        if(filterValueKey === 'Completed') {
            filteredTasks = tasks1.filter(el => el.isDone)
        }
        return filteredTasks;
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={FooFilter()}
                removeTask={removeTask}
                filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;

