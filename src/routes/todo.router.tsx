import TodoPage from "@/pages/TodoPage"
import { Route, Routes } from "react-router"



export const TodoRoutes = ()=>{

    return(

     
        <Routes>
            <Route path="/" element={<TodoPage/>} />
        </Routes>
        
    )
}