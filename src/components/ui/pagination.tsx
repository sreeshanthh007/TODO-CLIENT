interface PaginationProps {
  page: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
}

export default function Pagination({ page, totalPages, onNext, onPrev }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Previous
      </button>

      <span className="text-sm text-slate-600">
        Page <span className="font-semibold text-slate-900">{page}</span> of{' '}
        <span className="font-semibold text-slate-900">{totalPages}</span>
      </span>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  )
}