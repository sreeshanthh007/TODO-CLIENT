import type { TODO, TodoStatus } from '@/types/todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: TODO[]
  editingId: string | null
  onSetEditing: (id: string | null) => void
  onUpdateTodo: (id: string, updates: Partial<TODO>) => void
  onChangeStatus: (id: string, status: TodoStatus) => void
  onDeleteTodo: (id: string) => void
}

export default function TodoList({
  todos,
  editingId,
  onSetEditing,
  onUpdateTodo,
  onChangeStatus,
  onDeleteTodo,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-500 text-lg">No todos yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          isEditing={editingId === todo._id}
          onSetEditing={onSetEditing}
          onUpdateTodo={onUpdateTodo}
          onChangeStatus={onChangeStatus}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  )
}
