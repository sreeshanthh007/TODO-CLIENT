

import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TODO } from '@/DTO/Response'

interface TodoItemProps {
  todo: TODO
  onRemove: (id: string) => void
}

export function TodoItem({ todo, onRemove }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer accent-blue-600"
      />


      <Button
        onClick={() => onRemove(todo._id)}
        variant="ghost"
        size="sm"
        className="text-red-600 hover:bg-red-50"
        aria-label={`Delete "${todo.title}"`}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  )
}
