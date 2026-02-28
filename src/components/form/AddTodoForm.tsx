
import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface AddTodoFormProps {
  onAdd: (title: string) => void
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
    
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim()) return

    setIsLoading(true)
    try {
      onAdd(input)
      setInput('')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <Button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="bg-blue-600 hover:bg-blue-700"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </form>
  )
}
