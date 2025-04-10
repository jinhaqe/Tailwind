import React from "react";
import UserComment from "./UserComment";

export default function DetailList({ detail, deleteItem }) {
   const handleDelete = () => {
      deleteItem(detail.id);
   };

   return (
      <div className="w-[600px] h-screen pt-30">
         <div className="flex flex-row justify-between items-center px-15">
            <p className="text-3xl font-semibold">{detail.title}</p>
            <button onClick={handleDelete}>DELETE</button>
         </div>
         <div className="px-15">
            <p className="p-3">{detail.date}</p>
            <p className="p-3">{detail.description}</p>
            <hr />
         </div>
         <UserComment />
      </div>
   );
}
