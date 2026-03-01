

export interface ResponseTodoDTO{
    data:{
        id:string
    title:string
    status:"pending" | "in-progress" | "completed"
    createdAt:Date
    },
    message:string,
    success:string
}

export interface EditTodoDTO{
    title?:string
    status?:string
}

