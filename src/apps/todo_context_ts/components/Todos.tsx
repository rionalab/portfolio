import {useContext} from 'react'
import { TodoContext } from '../context/todoContext'
import { todoActions } from '../reducer/todoReducer'
import { ITodoContext } from '../types/main'

export default function Todos() {

    const {todos, dispatch} = useContext<ITodoContext>(TodoContext)

    const itemStyle = (status: Boolean) => {
        return status ? {
            color: '#aaa',
            textDecoration: 'line-through'
        }:{}
    }

    const handleUpdate = (id: number) => {
        dispatch({
            id,
            type: todoActions.UPDATE_STATUS,
        })
    }

    const handleRemove = (id: number) => {
        dispatch({
            id,
            type: todoActions.REMOVE,
        })
    }

    console.log(todos)

    return (
        <div>
            {
                todos.length < 1 && <p><b>Oppsie...nothing to show here</b><br />Feel free to add one</p>
            }
            {
                todos.map( (x, i) =>
                    <p key={x.id} onClick={()=> handleUpdate(x.id)} style={itemStyle(x.status)}>
                        {i+1}. {x.title} - {x.description} <button onClick={()=>handleRemove(x.id)}>remove</button>
                    </p>
                )
            }
        </div>
    )
}
