// const initState = [
//     { id: 1, name: 'Learn to code', completed: false, priority: 'Medium' },
//     { id: 2, name: 'Learn to dance', completed: true, priority: 'Low' },
//     { id: 3, name: 'Learn Redux', completed: true, priority: 'High' },
// ]


// const TodoListSlice = (state = initState, action) => {
//     switch (action.type) {
//         case 'addTodo':
//             return [...state, action.payload]
//         case 'deleteTodo': {
//             const newTodos = [...state].filter(todo => todo.id !== action.payload)
//             return newTodos
//         }
//         case 'toggleTodo': {
//             const newTodos = [...state].map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//             return newTodos
//         }
//         default: return state
//     }
// }

// export default TodoListSlice

import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn to code', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn to dance', completed: true, priority: 'Low' },
        { id: 3, name: 'Learn Redux', completed: true, priority: 'High' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            return state.map(item => item.id === action.payload ? { ...item, completed: !item.completed} : item)
        }
    }
})

export default todoListSlice