import React, { useState } from "react";

export default function AddList({ setPage, setList }) {
   const [formData, setFormData] = useState({
      title: "",
      description: "",
      date: "",
   });

   const addList = () => {
      const { title, description, date } = formData;

      if (
         title.trim() === "" ||
         description.trim() === "" ||
         date.trim() === ""
      ) {
         alert("비워진 값이 있어요");
         return;
      }

      // 리스트에 항목 추가
      setList((prevList) => [
         ...prevList,
         { title, description, date, id: new Date().getTime() },
      ]);

      // 상태 초기화
      setFormData({ title: "", description: "", date: "" });
   };

   const handleSave = () => {
      // 항목을 추가하고, 오류가 없다면 페이지 변경
      addList();
      if (formData.title && formData.description && formData.date) {
         setPage(false); // 입력이 완료되면 페이지 전환
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   return (
      <div className="w-[600px] p-6 ml-10 h-screen pt-30">
         <div className="flex flex-row justify-end items-center">
            <button
               className="mr-2 px-6 py-2 w-[100px] rounded-lg opacity-75 hover:bg-sky-950 hover:text-white transition"
               onClick={() => setPage((prev) => !prev)}
            >
               취소
            </button>
            <button
               className="px-6 py-2 w-[100px] text-white bg-sky-900 rounded-lg opacity-75 hover:bg-sky-950 transition"
               onClick={handleSave}
            >
               저장
            </button>
         </div>
         <div>
            <div className="space-y-4">
               <div>
                  <label
                     htmlFor="title"
                     className="block text-lg font-semibold text-gray-700"
                  >
                     제목
                  </label>
                  <input
                     type="text"
                     id="title"
                     name="title"
                     className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-800"
                     placeholder="제목을 입력하세요"
                     value={formData.title}
                     onChange={handleChange}
                  />
               </div>
               <div>
                  <label
                     htmlFor="description"
                     className="block text-lg font-semibold text-gray-700"
                  >
                     설명
                  </label>
                  <textarea
                     id="description"
                     name="description"
                     className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-800"
                     placeholder="설명을 입력하세요"
                     rows="4"
                     value={formData.description}
                     onChange={handleChange}
                  ></textarea>
               </div>
               <div>
                  <label
                     htmlFor="date"
                     className="block text-lg font-semibold text-gray-700"
                  >
                     날짜
                  </label>
                  <input
                     type="date"
                     id="date"
                     name="date"
                     className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-800"
                     value={formData.date}
                     onChange={handleChange}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
