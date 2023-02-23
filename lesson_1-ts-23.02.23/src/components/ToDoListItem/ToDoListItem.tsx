// const ToDoListItem = (props: any) => {
//     return (
//        <li>{props.text}</li>
//     )
// }
// export default ToDoListItem

import { Component } from 'react';
import { ITodo } from '../../types';
import './ToDoListItem.css'

// Mutable(мутабельность) - изменение
// State - неизменяемый (inmutable)

interface IToDoListItemState {
    done: boolean,
    important: boolean
}

interface IToDoListItemProps extends ITodo {
    onDoneClick: () => void;
}

export default class ToDoListItem extends Component<IToDoListItemProps, IToDoListItemState> {
    
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

    onChangeState = (nameState: 'done'|'important') => {
            //@ts-ignore
        this.setState((state) => {
            //@ts-ignore
            return {
                [nameState]: !state[nameState]
            }
        })
    }

    render() {
        const { text, done, important } = this.props;    
        
        let classNames = '';
        if(done) {
            classNames += 'done';
        }
        if(important) {
            classNames+='important';
        }
        return (
            <li className={classNames}>
                {text}
                <button onClick={this.props.onDoneClick}>Done</button>
                <button onClick={this.props.onDoneClick}>Important</button>
            </li>
        )
    }
}