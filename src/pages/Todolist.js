import React from "react";
import { useRef } from "react";

export const Todolist = ({
  clickHandler,
  clickToAdd,
  clickToDelete,
  newData,
  value,
  setNewData,
}) => {
  const ref = useRef();

  const selectedDelete = () => {
    if (newData.length > 0) {
      const newArr = newData.filter((item) => item.checked === false);

      setNewData(newArr);
    }
  };

  const checkedHandle = (val) => {
    setNewData(
      newData.map((item) => {
        if (item.id === val.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
  };

  const completedHandler = (val) => {
    setNewData(
      newData.map((item) => {
        if (item.id === val.id && item.isInEditMode === false) {
          // only check it when these condtions are true
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const dblToClick = (val) => {
    setNewData(
      newData.map((item) => {
        if (item.id === val.id) {
          return {
            ...item,
            isInEditMode: !item.isInEditMode,
          };
        }
        return item;
      })
    );
  };

  const updateRender = (val) => {
    setNewData(
      newData.map((item) => {
        if (item.id === val.id) {
          return {
            ...item,
            value: ref.current.value,
            isInEditMode: false,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="container py-1 my-3 ">
      <div className="row">
        <div className="col">
          <code className="fs-2">ToDo List</code>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col d-flex">
          <input
            onChange={(e) => clickHandler(e)}
            className="form-control mx-2 shadow-none"
            type="text"
            value={value}
            placeholder="add your list"
          />
          <button
            onClick={() => clickToAdd()}
            className="btn btn-outline-primary rounded-1 "
          >
            Add
          </button>
          <button
            className="btn btn-outline-danger mx-1"
            onClick={selectedDelete}
          >
            Delete selected
          </button>
        </div>
      </div>
      <div className="row justify-content-center mx-2">
        <div className="col ">
          {newData.map((val) => {
            return (
              <div
                style={{ wordBreak: "break-all" }} // to prevent overflow of text
                key={val.id}
                className={`${
                  val.completed ? "line-thru" : null
                } bg-success my-2 d-flex justify-content-between align-items-center p-2 text-white `}
              >
                {" "}
                <p
                  className="d-flex justify-content-center align-items-center p-0 m-0"
                  onDoubleClick={(e) => dblToClick(val)}
                >
                  {val.isInEditMode ? (
                    <>
                      {" "}
                      <input
                        type="text"
                        defaultValue={val.value}
                        ref={ref}
                      />{" "}
                      <button
                        onClick={(e) => updateRender(val)}
                        className="btn btn-primary rounded-5"
                      >
                        Update
                      </button>
                    </>
                  ) : (
                    val.value
                  )}
                </p>
                <div className="d-flex justify-content-center align-items-center p-0 m-0">
                  <button
                    onClick={(e) => completedHandler(val)}
                    className="btn bg-info me-1 rounded-5"
                  >
                    &#10004;
                  </button>
                  <button
                    onClick={() => {
                      const newArr = newData.filter(
                        (item) => item.id !== val.id
                      );
                      clickToDelete(newArr);
                    }}
                    className="btn bg-warning rounded-5"
                  >
                    &#x2716;
                  </button>
                  <input
                    className="form-check-input mx-1"
                    onChange={(e) => checkedHandle(val)}
                    type="checkbox"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
