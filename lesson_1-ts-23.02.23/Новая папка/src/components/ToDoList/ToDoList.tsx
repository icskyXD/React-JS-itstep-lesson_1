import { ToDoListItem } from '../index'
import { ITodo } from '../../types'
import { FC } from 'react';

interface IToDoListProps {
    todos: ITodo[]
    onDone: (id:number) => void
    onImportant: (id:number) => void
    onDelete: (id:number) => void
}

const ToDoList: FC<IToDoListProps> = (props) => {
    
    return (
    <ul>
        {/* {props.todos.map(item => <ToDoListItem
            id={item.id}
            text={item.text}
            done={item.done}
            important={item.important}
            />)} */}
            {props.todos.map((item) => (
                 <ToDoListItem key={item.id} {...item}
                    onDoneClick={() => props.onDone(item.id)}
                    onImportantClick={() => props.onImportant(item.id)}
                    onDeleteClick={() => props.onDelete(item.id)}
                 />
            ))}
    </ul>    
    )
}

export default ToDoList