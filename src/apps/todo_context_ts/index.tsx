import React from 'react'
import AddTodo from './components/AddTodo'
import TodoProvider from './context/todoContext'

export default function index() {
    return (
        <div>
            <TodoProvider>
                <AddTodo />
            </TodoProvider>
        </div>
    )
}
