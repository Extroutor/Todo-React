import React from 'react';
import Check from "./Check";
import {BsTrash} from "react-icons/bs";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div
            className='flex items-center justify-between mb-4
            rounded-2xl bg-zinc-800 p-5 w-full'
        >
            <button className='flex items-center' onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted} />
                <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-200'/>
            </button>
        </div>
    );
};

export default TodoItem;