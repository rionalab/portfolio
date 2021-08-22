import { ITodo, IAction } from "../types/main"

export const todoActions = {
    ADD: 'ADD',
    UPDATE_STATUS: 'UPDATE_STATUS',
    REMOVE: 'REMOVE',
}

export const todoReducer = (state:ITodo[], action:IAction) => {
    switch (action.type) {
        case todoActions.ADD:
            return action.data ? [...state, action.data] : [...state]
        case todoActions.UPDATE_STATUS:
            return state.map((row: ITodo) => (
                row.id === action.id ? {...row, status: !row.status} :row
            ))
        case todoActions.REMOVE:
            return state.filter((row: ITodo) => row.id !== action.id)
        default:
            return state
    }
}