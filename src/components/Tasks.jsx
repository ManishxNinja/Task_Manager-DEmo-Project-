import NewTask from "./NewTasks"

export default function Tasks({tasks,onAdd,onDelete}) {
  console.log("t",tasks)
  return(
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p className="text-stone-800 mb-4">
        This project does not have any tasks yield.
      </p>} 
      {tasks.length > 0 && (<ul className="p-4 mt-8 bg-stone-100">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between my-4 text-black">
            <span>{task.text}</span> 
            <button className="test-stone-700 hover:text-red-500">Clear</button>
          </li> 
        ))}
      </ul>)} 
    </section>
  )
  
}