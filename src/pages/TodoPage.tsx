
import { useEffect, useState } from 'react'
import TodoForm from '@/components/form/AddTodoForm'
import TodoList from '@/components/Todo/TodoList'
import type { TODO } from '@/types/todo'
import { CreateTodoService, EditTodoService, GetAllTodoService, RemoveTodoService } from '@/services/todo.service'
import useToast from '@/hooks/UseToast'


export default function TodoPage() {
  const [todos, setTodos] = useState<TODO[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
    const {success,Error} = useToast()

    const fetchTodos = async () => {
      try {
        const result = await GetAllTodoService()
        if (result.success) {
          setTodos(result.data) 
          success(result.message)
        }
      } catch (error) {
        Error(error.response.data?.message)
      } finally {
        setLoading(false)
      }
    }

    
  useEffect(() => {
    fetchTodos()
  }, [])




 const handleAddTodo = async (title: string) => {
  if (!title.trim()) return;

  try {
    const response = await CreateTodoService(title.trim());
    success(response.message);

   
    const result = await GetAllTodoService();
    if (result.success) {
      setTodos(result.data);
    }
  } catch (error) {
    Error(error?.response?.data?.message || "Failed to create todo");
  }
};


const handleUpdateTodo = async (id: string, updates: Partial<TODO>) => {
  const originalTodos = [...todos];

  const updatedTodos = todos.map((todo) =>
    todo._id === id ? { ...todo, ...updates } : todo
  );
  setTodos(updatedTodos);

  try {
    const response = await EditTodoService(id, updates);
    success(response.message);
    setEditingId(null); 
  } catch (error) {
    setTodos(originalTodos);
    Error(error?.response?.data?.message || "Failed to update todo");
  }
};


  const handleChangeStatus = async (
    id: string,
    status: 'pending' | 'in-progress' | 'completed'
  ) => {
    await handleUpdateTodo(id, { status })
  }


  const handleDeleteTodo = async (id: string) => {
  
    try {
        const updatedTodos = todos.filter((todo) => todo._id !== id)
     setTodos(updatedTodos)
     const response = await RemoveTodoService(id)

     if(response.success){
        success(response.message)
     }
    } catch (error) {
        console.log("error in handleDeleteTodo",error)
        Error(error.response?.data?.message)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">My Todos</h1>
          <p className="text-slate-600">
            Manage your tasks efficiently
          </p>
        </div>

        <div className="space-y-6">
          <TodoForm onAddTodo={handleAddTodo} />

          {loading ? (
            <div className="text-center py-8 text-slate-600">Loading...</div>
          ) : (
            <TodoList
              todos={todos}
              editingId={editingId}
              onSetEditing={setEditingId}
              onUpdateTodo={handleUpdateTodo}
              onChangeStatus={handleChangeStatus}
              onDeleteTodo={handleDeleteTodo}
            />
          )}
        </div>
      </div>
    </main>
  )
}
