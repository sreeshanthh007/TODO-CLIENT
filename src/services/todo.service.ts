import { ApiInstance } from "../api/axios";
import { TODO_ROUTE } from "../constants/Route";
import type { EditTodoDTO, ResponseTodoDTO } from "../DTO/Response";
import type { ApiResponse } from "../utils/ApiResponse";



export const GetAllTodoService = async(page: number, limit: number): Promise<ResponseTodoDTO> => {
    const response = await ApiInstance.get(TODO_ROUTE.GetAllTodo, {
        params: { page, limit }
    })
    return response.data
}

export const EditTodoService = async(todoId:string,data:EditTodoDTO) : Promise<ApiResponse> =>{

    const response = await ApiInstance.patch(TODO_ROUTE.EditTodo(todoId),data)

    return response.data
}


export const RemoveTodoService = async(todoId:string) :Promise<ApiResponse> =>{

    const response = await ApiInstance.delete(TODO_ROUTE.RemoveTodo(todoId))

    return response.data
}


export const CreateTodoService = async(title:string) : Promise<ApiResponse> =>{

    const response = await ApiInstance.post(TODO_ROUTE.CreateTodo,{title})

    return response.data
}

