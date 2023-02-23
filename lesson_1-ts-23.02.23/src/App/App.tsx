// JSX razmetka
// JSX - components
// JSX - elements
import React, {Component} from 'react';
import { ToDoList, Header} from '../components'
import {ITodo} from '../types'

// const App = () => {
//     return (
//         <div>
//             <Header text='Todo App'></Header>
//             <ToDoList/>
//         </div>
//     )
// }

// export default App;

interface IAppState{
    todos: ITodo[]
}

export default class App extends Component<{}, IAppState> {

    state = {
        todos:[
            {id: 1, text: 'Learn React', done: false, important: false},
            {id: 2, text: 'Drink Coffee', done: false, important: false}
        ]
    };

    onChangeTodos = (id:number) => {
        this.setState((state)=> {
            // 1. Нашли индекс элемента, на который кликнули.

            const todoIdx = this.state.todos.findIndex(item => item.id === id)        
            // 2. Создали копию с противоположным значением
            const newTodo = {
                ...state.todos[todoIdx],
                done: !state.todos[todoIdx].done,
            }
            // 3. Создали новый массив с обновленной таской

            const before = state.todos.slice(0, todoIdx)
            const after = state.todos.slice(todoIdx+1)

            return {
                todos: [...before, newTodo, ...after]
            }
        })
    }
    render() {

        return (
            <div>
                <Header title='Todo App'/>
                <ToDoList 
                    todos={this.state.todos}
                    onDone={this.onChangeTodos}
                />
            </div>
        )
    }
}