import React, { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "iii"]);
  const [completeTodos, setCompleteTodos] = useState(["完了１", "完了２"]);

  const IncompleteArea = {
    width: "600px",
    minHeight: "300px",
    backgroundColor: "pink",
    textAlign: "center"
  };
  const lists = {
    display: "flex"
  };

  const completeArea = {
    width: "600px",
    minHeight: "300px",
    backgroundColor: "green",
    // textAlign: "center",
    color: "#fff"
  };

  const onChangeAdd = (event) => {
    setTodoText(event.target.value);
  };

  const AddText = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div
        style={{
          width: "600px",
          height: "30px",
          backgroundColor: "blue",
          textAlign: "center"
        }}
      >
        <div>
          <input
            type="text"
            placeholder="テキストはこちら"
            onChange={onChangeAdd}
            value={todoText}
          />
          <button onClick={AddText}>追加</button>
        </div>
      </div>
      <div style={IncompleteArea}>
        <h3>未完了</h3>
        <ul>
          {incompleteTodos.map((todos, index) => {
            return (
              <li key={todos}>
                <div style={lists}>
                  <p>{todos}</p>
                  <button>追加ボタン</button>
                  <button onClick={() => onClickDelete(index)}>
                    削除ボタン
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={completeArea}>
        <p>完了のTODOS</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div style={lists}>
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
