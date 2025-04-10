import DetailList from "./DetailList.jsx";

export default function List({ setPage, list, setDetail }) {
   return (
      <div className="w-[15%] h-[97%] bg-sky-950 rounded-tr-3xl rounded-br-3xl flex flex-col justify-start items-left pt-10 px-6">
         <p className="text-xl font-bold text-white">YOUR PROJECTS</p>
         <button
            className="mt-9 px-6 py-2 border-2 w-[140px] border-white text-white font-semibold rounded-lg opacity-75 hover:bg-sky-900 transition "
            onClick={() => setPage(true)}
         >
            + Add
         </button>
         <ul className="text-white mt-7">
            {list.map((item) => (
               <li
                  key={item.id}
                  className="cursor-pointer hover:text-sky-300 mb-2 py-2 px-4 bg-sky-900 rounded-2xl"
                  onClick={() => setDetail(item)}
               >
                  {item.title}
               </li>
            ))}
         </ul>
      </div>
   );
}
