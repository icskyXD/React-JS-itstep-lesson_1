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
    onImportantClick: () => void;
    onDeleteClick: () => void;
}

export default class ToDoListItem extends Component<IToDoListItemProps, IToDoListItemState> {

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
                <button onClick={this.props.onImportantClick}>Important</button>
                <button onClick={this.props.onDeleteClick}>Delete</button>
            </li>
        )
    }
}