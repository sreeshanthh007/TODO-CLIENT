import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { TODO, TodoStatus } from '@/types/todo'
import { Trash2, Edit2, Check, X } from 'lucide-react'

interface TodoItemProps {
  todo: TODO
  isEditing: boolean
  onSetEditing: (id: string | null) => void
  onUpdateTodo: (id: string, updates: Partial<TODO>) => void
  onChangeStatus: (id: string, status: TodoStatus) => void
  onDeleteTodo: (id: string) => void
}

const statusConfig: Record<TodoStatus, { color: string; label: string }> = {
  pending: { color: 'bg-slate-100 text-slate-700', label: 'Pending' },
  'in-progress': { color: 'bg-blue-100 text-blue-700', label: 'In Progress' },
  completed: { color: 'bg-green-100 text-green-700', label: 'Completed' },
}

export default function TodoItem({
  todo,
  isEditing,
  onSetEditing,
  onUpdateTodo,
  onChangeStatus,
  onDeleteTodo,
}: TodoItemProps) {

  const [editTitle, setEditTitle] = useState(todo.title)
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveEdit = async () => {
    if (!editTitle.trim()) return

    setIsSaving(true)
    try {
      await onUpdateTodo(todo._id, { title: editTitle.trim() })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancelEdit = () => {
    setEditTitle(todo.title)
    onSetEditing(null)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
      <div className="flex items-center gap-4">
        {/* Status Badge */}
        <div className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${statusConfig[todo.status].color}`}>
          {statusConfig[todo.status].label}
        </div>

        {/* Title or Edit Input */}
        <div className="flex-1">
          {isEditing ? (
            <Input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              disabled={isSaving}
              className="h-8"
              autoFocus
            />
          ) : (
            <p className={`text-lg ${todo.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-900'}`}>
              {todo.title}
            </p>
          )}
        </div>

        {/* Status Selector */}
        {!isEditing && (
          <Select value={todo.status} onValueChange={(status) => onChangeStatus(todo._id, status as TodoStatus)}>
            <SelectTrigger className="w-32 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button
                size="sm"
                onClick={handleSaveEdit}
                disabled={isSaving || !editTitle.trim()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                onClick={handleCancelEdit}
                disabled={isSaving}
                variant="outline"
              >
                <X className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                onClick={() => onSetEditing(todo._id)}
                variant="outline"
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                onClick={() => onDeleteTodo(todo._id)}
                variant="outline"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
