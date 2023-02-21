// JSX razmetka
// JSX - components
// JSX - elements
import React from 'react';
import { ToDoList, Header} from '../components'

const App = () => {
    return (
        <div>
            <Header text='Todo App'></Header>
            <ToDoList/>
        </div>
    )
}

export default App;