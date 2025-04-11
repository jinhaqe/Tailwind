import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider.jsx";

export default function List({ setPage, list, setDetail }) {
   const { changeTheme } = useContext(ThemeContext);

   return (
      <div className="w-[15%] h-[97%] bg-sky-950 rounded-tr-3xl rounded-br-3xl flex flex-col justify-start items-left pt-10 px-6 dark:bg-pink-200">
         <p className="text-xl font-bold text-white dark:text-black">
            YOUR PROJECTS
         </p>
         <button
            onClick={() => {
               console.log("버튼클릭"), changeTheme();
            }}
            className="mt-9 px-6 py-2 border-2 w-[140px] border-white text-white font-semibold rounded-lg opacity-75 hover:bg-sky-900 transition-all dark:text-black dark:border-pink-300 dark:hover:bg-pink-400 dark:bg-pink-300  dark:hover:text-white duration-200"
         >
            + mode
         </button>
         <button
            className="mt-2 px-6 py-2 border-2 w-[140px] border-white text-white font-semibold rounded-lg opacity-75 hover:bg-sky-900 transition-all dark:text-black dark:border-pink-300 dark:hover:bg-pink-400 dark:bg-pink-300  dark:hover:text-white duration-200"
            onClick={() => {
               setPage(true);
               setDetail(null);
            }}
         >
            + Add
         </button>
         <ul className="text-white mt-7">
            {list.map((item) => (
               <li
                  key={item.id}
                  className="cursor-pointer hover:text-sky-300 mb-2 py-2 px-4 bg-sky-900 rounded-2xl dark:bg-pink-300 dark:text-black dark:hover:text-white"
                  onClick={() => setDetail(item)}
               >
                  {item.title}
               </li>
            ))}
         </ul>
      </div>
   );
}
