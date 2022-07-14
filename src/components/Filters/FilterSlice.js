// const initState = {
//     search: '',
//     status: 'All',
//     priorities: []
// }

// const filterSlice = (state = initState, action) => {
//     switch (action.type) {
//         case 'filterSearch': {
//             return { ...state, search: action.payload }
//         }
//         case 'filterStatus': {
//             return { ...state, status: action.payload }
//         }
//         case 'filterPriorities': {
//             return { ...state, priorities: [...action.payload] }
//         }
//         default: return state
//     }
// }

// export default filterSlice
import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        filterSearch: (state, action) => {
            state.search = action.payload
        },
        filterStatus: (state, action) => {
            state.status = action.payload
        },
        filterPriorities: (state, action) => {
            state.priorities = action.payload
        }
    }
})

export default filterSlice
