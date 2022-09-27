import React from "react";
import { Todolist } from "./Todolist";
import { useState } from "react";

export const ToDo = () => {
  const [data, setData] = useState("");
  const [newData, setNewData] = useState([]);

  const clickHandler = (e) => {
    setData(e.target.value);
  };

  const clickToAdd = () => {
    if (!data) {
      return null;
    }
    const item = {
      id: Math.random() * 100000,
      value: data,
      completed: false,
      isInEditMode: false,
      checked: false,
    };
    setNewData((oldList) => [...oldList, item]);

    setData("");
  };

  const clickToDelete = (newArr) => {
    setNewData(newArr);
  };

  return (
    <Todolist
      clickToAdd={clickToAdd}
      clickHandler={clickHandler}
      clickToDelete={clickToDelete}
      value={data}
      newData={newData}
      setNewData={setNewData}
    />
  );
};
