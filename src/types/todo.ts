export interface TODO{
    _id:string
    title:string
    status:"pending" | "in-progress" | "completed"
    createdAt:string
}



export type TodoStatus = 'pending' | 'in-progress' | 'completed'
