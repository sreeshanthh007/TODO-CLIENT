
import { TodoItem } from './TodoItem'
import { TODO } from '@/DTO/Response'

interface TodoListProps {
  todos: TODO[]
  onRemove: (id: string) => void
}

export function TodoList({ todos, onRemove }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No todos yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onRemove={onRemove}

        />
      ))}
    </div>
  )
}
