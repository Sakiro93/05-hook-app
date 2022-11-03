import { fireEvent, render, screen } from "@testing-library/react";
import { ScrollRestoration } from "react-router-dom";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem
            item={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        //screen.debug()
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })

    test('debe de mostrar el Todo completado', () => {
        todo.done = true;
        render(<TodoItem
            item={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

      
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    
    
    })

    test('span debe de llamar el ToggleTodo cuando se hace click', () => { 
        
        render(<TodoItem
            item={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement)
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
     })

     test('button debe de llamar el deleteTodo cuando se hace click', () => { 
        
        render(<TodoItem
            item={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);
        
        const deleteElement = screen.getByRole('button');
        
        fireEvent.click(deleteElement)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
     })
})