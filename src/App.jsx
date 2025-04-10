import "./App.css";
import Main from "./components/Main.jsx";
import List from "./components/List.jsx";
import AddList from "./components/AddList.jsx";
import DetailList from "./components/DetailList.jsx";

import { useState } from "react";

function App() {
   const [page, setPage] = useState(false);
   const [list, setList] = useState([]);
   const [detail, setDetail] = useState(null);

   const deleteItem = (id) => {
      setList((prevList) => prevList.filter((item) => item.id !== id));
      setDetail(null);
   };

   return (
      <div className="h-screen flex flex-row items-center">
         <List setPage={setPage} list={list} setDetail={setDetail} />
         {detail ? (
            <DetailList detail={detail} deleteItem={deleteItem} />
         ) : page ? (
            <AddList setPage={setPage} setList={setList} />
         ) : (
            <Main setPage={setPage} />
         )}
      </div>
   );
}

export default App;
