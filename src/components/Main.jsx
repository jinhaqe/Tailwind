import Img from "../assets/608502.png";

export default function Main({ setPage }) {
   return (
      <>
         <div className="w-[75%] h-screen">
            <div className="h-full flex flex-col justify-center items-center pb-80">
               <img src={Img} className="w-[200px] rounded-xl pl-10" />
               <p className="text-xl font-semibold p-4 mt-5">
                  No Project Selected
               </p>
               <p className="text-lg">
                  Select a project or get started with a new one
               </p>
               <button
                  className="mt-9 px-6 py-2 bg-sky-900 text-white font-semibold rounded-lg hover:bg-sky-950 transition"
                  onClick={() => setPage((prev) => !prev)}
               >
                  Project Add
               </button>
            </div>
         </div>
      </>
   );
}
