// JSX razmetka
// JSX - components
// JSX - elements
import React, {Component} from 'react';
import { ToDoList, Header, SearchInput, AddInput } from '../components'
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
    searchText: string
}

export default class App extends Component<{}, IAppState> {

    state = {
        todos:[
            {id: 1, text: 'Learn React', done: false, important: false},
            {id: 2, text: 'Drink Coffee', done: false, important: false}
        ],
        searchText: ''
    };

    onSearch = (value:string) =>{
        this.setState({searchText:value})
    }

    onChangeTodos = (id: number, field: string) => {
        this.setState((state)=> {
            // 1. Нашли индекс элемента, на который кликнули.
            const todoIdx = this.state.todos.findIndex(item => item.id === id)        
            // 2. Создали копию с противоположным значением
            const newTodo = {
                ...state.todos[todoIdx],
               // @ts-ignore
                [field]: !state.todos[todoIdx][field],
            }
            // 3. Создали новый массив с обновленной таской
            const before = state.todos.slice(0, todoIdx)
            const after = state.todos.slice(todoIdx+1)
            return {
                todos: [...before, newTodo, ...after]
            }
        })
    }

    handleDelete = (id:number) => {
        this.setState((state) => {
            const todoIdx= this.state.todos.findIndex(item => item.id === id)

            const before = [...state.todos.slice(0, todoIdx)]
            const after  = [...state.todos.slice(todoIdx+1)]
            return {
                todos: [...before, ...after]
            }
        })        
    }

    onAddTask = (text:string) => {
        this.setState((state) => {
            const newTodo: ITodo = {
                id: Math.random(),
                text,
                done: false,
                important: false,
            }
            return {
                todos: [...state.todos, newTodo]
            }
        })
    }

    render() {

        const { searchText, todos } = this.state
        const filteredTodos = todos.filter(todo=>todo.text.toLowerCase().includes(searchText.toLowerCase()))

        return (
            <div>
                <Header title='Todo App'/>
                <AddInput onAdd={this.onAddTask}/>
                <SearchInput
                    search={this.state.searchText}
                    onSearch={this.onSearch}
                />
                <ToDoList 
                    todos={filteredTodos}
                    onDone={(id)=> this.onChangeTodos(id, 'done')}
                    onImportant={(id) => this.onChangeTodos(id, 'important')}
                    onDelete={this.handleDelete}
                />
            </div>
        )
    }
}