import {createContext, useReducer, ReactNode} from 'react'
import { todoReducer } from '../reducer/todoReducer'
import { ITodo, ITodoContext } from '../types/main'

export const TodoContext = createContext<ITodoContext>({
    todos: [],
    addTodo: () => {},
    doneTodo: () => {},
    dispatch: () => {},
})

interface IProps {
    children: ReactNode
}

const TodoProvider = ({children}: IProps) => {
    const defaultState:ITodo[]|[] = []
    // const [todos, setTodos] = useState<ITodo[] | []>([])
    const [state, dispatch] = useReducer(todoReducer, defaultState);

    // const addTodo = (todo: ITodo) => {
    //     setTodos([...todos, todo])
    // }

    // const doneTodo = (id:number) => {
    //     const newState = todos.map((row:ITodo) => {
    //         row.status = row.id === id ? !row.status : row.status
    //         return row
    //     })

    //     setTodos(newState)
    // }

    return (
        <TodoContext.Provider value={{todos:state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider