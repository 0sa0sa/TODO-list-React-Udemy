import React from "react";

const style = {
  backgroundColor: "#eeeeee",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodos = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
