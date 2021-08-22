import {FormEvent, useRef, useContext, useState} from 'react'
import { TodoContext } from '../context/todoContext'
import { todoActions } from '../reducer/todoReducer'
import { ITodoContext } from '../types/main'

interface IInput {
    title: string,
    description: string,
}

export default function FormTodo() {
    const defaultInput:IInput = {
        title: '',
        description: '',
    }
    const { todos, dispatch } = useContext<ITodoContext>(TodoContext)
    const inputRef = useRef<HTMLInputElement|null>(null)
    const [input, setInput] = useState<IInput>(defaultInput)
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
            type: todoActions.ADD,
            data: {
                id: todos.length+ 1,
                title: input.title,
                description: input.description,
                status: false
            }
        })
        setInput(defaultInput)
        inputRef.current?.focus()
    }
    const handleInput = (e: FormEvent<HTMLInputElement> ) => {
        const el = e.currentTarget
        setInput({...input, [el.name]: el.value})
    }
    return (
        <div>
            <form autoComplete="off" onSubmit={(e)=>handleSubmit(e)}>
                <p style={{marginBottom: '8px'}}>
                <input
                    ref={inputRef}
                    name="title"
                    type="text"
                    onChange={handleInput}
                    value={input.title}
                />
                </p>
                <p style={{marginBottom: '8px'}}>
                <input
                    type="text"
                    name="description"
                    onChange={handleInput}
                    value={input.description}
                />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}
