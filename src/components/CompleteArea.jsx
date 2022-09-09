import React from "react";

export const CompleteArea = (props) => {
  const { completeToDos, backInComplete } = props;
  return (
    <div className="complete-area">
      <p className="title">済</p>
      <ul>
        {completeToDos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => backInComplete(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
