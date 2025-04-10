import { useState } from "react";

export default function UserComment() {
   const [comment, setComment] = useState([]);
   const [input, setInput] = useState("");

   const addTodo = () => {
      if (input.trim() === "") return;
      setComment([
         ...comment,
         { id: Date.now(), text: input, completed: false },
      ]);
      setInput("");
   };

   const toggleTodo = (id) => {
      setComment(
         comment.map((comment) =>
            comment.id === id
               ? { ...comment, completed: !comment.completed }
               : comment
         )
      );
   };

   const deleteTodo = (id) => {
      setComment(comment.filter((com) => com.id !== id));
   };

   return (
      <div className="px-15">
         <p className="px-3 pt-5 pb-2 text-2xl font-semibold">TASK</p>
         <div className="flex mb-4">
            <input
               type="text"
               className="m-3 border w-[380px] border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
               placeholder="할 일을 입력하세요"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
            <button
               className="my-3 h-[42px] bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-950"
               onClick={addTodo}
            >
               추가
            </button>
         </div>
         {comment.length === 0 && (
            <p className="px-5">This project does not have any tasks yet.</p>
         )}

         {comment && (
            <ul className="px-3">
               {comment.map((com) => {
                  return (
                     <li
                        key={com.id}
                        className="flex justify-between bg-gray-100 py-3 px-4 w-[380px] mb-2"
                     >
                        <p
                           onClick={() => toggleTodo(com.id)}
                           className={`cursor-pointer ${
                              com.completed
                                 ? "line-through text-gray-400"
                                 : "text-black"
                           }`}
                        >
                           {com.text}
                        </p>
                        <button onClick={() => deleteTodo(com.id)}>
                           Clear
                        </button>
                     </li>
                  );
               })}
            </ul>
         )}
      </div>
   );
}
