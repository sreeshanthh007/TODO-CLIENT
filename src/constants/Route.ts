

export const TODO_ROUTE = {
    GetAllTodo : "/todo/todos",
    EditTodo : (todoId:string)=>`/todo/edit-todo/${todoId}`,
    RemoveTodo : (todoId:string)=>`/todo/remove-todo/${todoId}`,
    CreateTodo:"/todo/create-todo"
}