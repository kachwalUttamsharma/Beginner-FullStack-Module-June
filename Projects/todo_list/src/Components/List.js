import React, { useState, useTransition } from "react";

const List = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

//   const [isLoading, setIsLoading] = useState(false);

//   handler(() => {
//     setTransistion(() => {
//         makeAPicall;
//     })
//     // setIsLoading(true);
//     // makeAPicall;
//     // setIsLoading(false);
//   })

  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 11000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const newList = [];
     
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      // waiting for above for loop to be executed
      setList(newList);
    });
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange}></input>
      {isPending ? (
        <div> Loading..</div>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </div>
  );
};

export default List;
