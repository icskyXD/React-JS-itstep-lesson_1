// const ToDoListItem = (props: any) => {
//     return (
//        <li>{props.text}</li>
//     )
// }
// export default ToDoListItem

import { Component } from 'react';

// Mutable(мутабельность) - изменение
// State - неизменяемый (inmutable)

interface IToDoListItemState {
    done: boolean,
    important: boolean
}

export default class ToDoListItem extends Component<{ text: string }, IToDoListItemState> {
    
    state = {
        done: false,
        important: false,
    }

    onDoneClick = () => {
        // 1. Передаем в setState объект с НОВЫМИ значениями state
        // this.setState({ done: !this.state.done })
        // 2. B setState передаем колбэк в который приходит актуальный state.
        // Используем тогда, когда меняем значение, которое ЗАВИСИТ от предыдущего.
        this.setState((state) => {
            
            return {
                done: !state.done
            }
        })
    }

    onImportantClick = () => {
        this.setState((state) => {
            
            return {
                done: !state.important
            }
        })
    }

    onChangeState = (nameState: string) => {
        this.setState((state) => {
            return {
                [nameState]: !state[nameState]
            }
        })
    }

    render() {
        const { text } = this.props;        
        return (
            <li 
            style={{
                textDecoration: this.state.done ? 'line-through':'auto',
                fontWeight: this.state.important ? 'bold': 'normal'
            }}
            >
                {text}
                <button onClick={() => this.onDoneClick}>Done</button>
                <button onClick={() => this.onImportantClick}>Important</button>
            </li>
        )
    }
}