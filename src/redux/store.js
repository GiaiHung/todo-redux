// Redux core version
// import { createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(
//     rootReducer,
//     composedEnhancers,
// )
// export default store

// Redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/FilterSlice';
import todoListSlice from "../components/TodoList/TodoListSlice";

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store