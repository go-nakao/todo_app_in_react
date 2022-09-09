import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteToDos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">新規入力</p>
      <ul>
        {incompleteToDos.map((todo, index) => {
          //配列incompleteToDosの中身が、一つずつ　todoに入る。
          return (
            <div key={todo} className="list-row">
              {/*map関数を使用してループさせる場合、親タグにkeyを設定する。*/}
              <li>{todo}</li>
              {/*todoの中に、incompleteToDosの中身が入っており、出力*/}
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
