import React, {useState} from 'react';

const CreateTodoField = ({ setTodos }) => {
 const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [{
            id: new Date(),
            title,
            isCompleted: false
        }, ...prev])
        setTitle('')
    }
 return (
  <div className='flex items-center justify-between mb-20
            rounded-2xl bg-zinc-800 p-5 w-full'>
   <input
       type="text"
       onChange={e => setTitle(e.target.value)}
       value={title}
       onKeyPress={e => e.key === 'Enter' && addTodo(title)}
       className='bg-transparent w-full border-none outline-none'
       placeholder='Add a task'
   />
  </div>
 );
};

export default CreateTodoField;