function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
      />
      <span
        className={`flex-1 ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={onDelete}
        className="px-3 py-1 text-red-500 hover:bg-red-100 rounded transition-colors"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem