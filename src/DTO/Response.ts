

export interface ResponseTodoDTO{
    _id:string
    title:string
    status:"pending" | "in-progress" | "completed"
    createdAt:Date
}