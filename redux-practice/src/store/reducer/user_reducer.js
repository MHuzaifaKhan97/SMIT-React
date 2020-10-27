import { act } from "react-dom/test-utils"

const INITIAL_STATE = {
    name: 'Huzaifa Khan',
    email: 'huzaifa@gmail.com'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DATA': return {
            ...state,
            name: action.payload.name,
            email: action.payload.email,
        }
        default: return state;
    }
} 