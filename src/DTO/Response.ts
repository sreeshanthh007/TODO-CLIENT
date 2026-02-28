

export interface ResponseTodoDTO{
    data:{
        _id:string
    title:string
    status:"pending" | "in-progress" | "completed"
    createdAt:Date
    }
}

export interface EditTodoDTO{
    title?:string
    status?:string
}

export interface TODO{
    _id:string
    title:string
    status:"pending" | "in-progress" | "completed"
    createdAt:Date
}