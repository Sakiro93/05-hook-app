import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

const initialForm = {
    name: 'Angel',
    email: 'angel@google.com'
}

describe('Pruebas en useForm', () => { 
    test('debe de regresar los valores por defecto', () => { 
        

        const { result } = renderHook( ()=> useForm(initialForm) );
       expect( result.current ).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any( Function ),
        onResetForm: expect.any( Function )
      });

     })

     test('debe de cambiar el nombre del formulario', () => { 
        const { result } = renderHook( ()=> useForm(initialForm) );
        const { onInputChange } = result.current
        
        const newValue = 'Ismael'

        act( () => {
            onInputChange({ target: {name: 'name', value: newValue} })
        })
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
      })

      test('debe realizar el reset del formulario', () => { 
        const { result } = renderHook( ()=> useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current
        
        const newValue = 'Ismael'

        act( () => {
            onInputChange({ target: {name: 'name', value: newValue} });
            onResetForm();
        })
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
      })
 })