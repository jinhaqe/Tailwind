import "./App.css";
import Main from "./components/Main.jsx";
import List from "./components/List.jsx";
import AddList from "./components/AddList.jsx";
import DetailList from "./components/DetailList.jsx";

import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider.jsx";

function App() {
   const [page, setPage] = useState(false);
   const [list, setList] = useState([]);
   const [detail, setDetail] = useState(null);

   const deleteItem = (id) => {
      setList((prevList) => prevList.filter((item) => item.id !== id));
      setDetail(null);
   };

   return (
      <ThemeProvider>
         <div className="h-screen flex flex-row items-center dark:bg-pink-50">
            <List setPage={setPage} list={list} setDetail={setDetail} />
            {detail ? (
               <DetailList detail={detail} deleteItem={deleteItem} />
            ) : page ? (
               <AddList setPage={setPage} setList={setList} />
            ) : (
               <Main setPage={setPage} />
            )}
         </div>
      </ThemeProvider>
   );
}

export default App;
