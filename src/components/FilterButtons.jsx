function FilterButtons({ currentFilter, onFilterChange, activeCount, completedCount }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: `Active (${activeCount})` },
    { key: 'completed', label: `Completed (${completedCount})` }
  ]

  return (
    <div className="flex gap-2 mb-4 justify-center">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentFilter === key
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons