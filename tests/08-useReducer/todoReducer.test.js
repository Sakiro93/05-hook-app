import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        desciption: 'Demo Todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);
    })

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                desciption: 'Nuevo Todo',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const deleteState = todoReducer(initialState, action)
        expect(deleteState.length).toBe(0);
    })

    test('debe de realizar el Toggle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const toggleState = todoReducer(initialState, action)
        expect(toggleState[0].done).toBeTruthy()
    })
})