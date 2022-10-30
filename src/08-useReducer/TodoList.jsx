import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ items = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {
                items.map(item => (
                    <TodoItem 
                    item = {item} 
                    key={item.id} 
                    onDeleteTodo = { onDeleteTodo }
                    onToggleTodo={ onToggleTodo }/>
                ))
            }
        </ul>
    )
}
