import React, {useState} from 'react';
import './App7.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksType = {
    [todolistID: string]: Array<TaskType>
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    const todolistID1 = v1();
    const todolistID2 = v1();

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'Chocolate', isDone: true},
            {id: v1(), title: 'Ice-cream', isDone: true},
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Candy Cane', isDone: false},
            {id: v1(), title: 'Candy', isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter((t) => t.id !== id)});
    }

    function addTask(todolistID: string, title: string) {
        const newTask = {id: v1(), title: title, isDone: false}

        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map((t) => t.id === taskId ? {...t, isDone} : t)})
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map((todolist) => {
            return todolist.id === todolistID ? {...todolist, filter: value} : todolist;
        }))
    }


    const TodolistComponents = todolists.map((todolist) => {
        let tasksForTodolist = tasks[todolist.id];
        if (todolist.filter === 'active') {
            tasksForTodolist = tasks[todolist.id].filter(t => !t.isDone);
        }
        if (todolist.filter === 'completed') {
            tasksForTodolist = tasks[todolist.id].filter(t => t.isDone);
        }

        return (
            <Todolist
                key={todolist.id}
                todolistID={todolist.id}
                title={todolist.title}
                filter={todolist.filter}
                tasks={tasksForTodolist}

                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
            />
        )
    })

    return (
        <div className="App">
            {TodolistComponents}
        </div>
    );
}

export default App;
