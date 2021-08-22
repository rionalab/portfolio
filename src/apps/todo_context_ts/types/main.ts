export interface ITodo {
    id: number;
    title: string;
    status: boolean;
    description: string;
}

export interface IAction {
    type: string;
    id?: number;
    data?: ITodo;
}

export interface ITodoContext {
    todos: ITodo[];
    dispatch: ({type, data}:IAction) => void
    addTodo?:  (todo: ITodo) => void;
    doneTodo?: (id: number) => void;
}