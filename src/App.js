import React, { useState } from "react";
import "./style.css";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  const [incompleteToDos, setIncompleteToDo] = useState([]);

  const [completeToDos, setCompleteToDos] = useState([]);

  //入力欄に入力する
  const [toDoText, setToDoText] = useState([""]);

  //onChangeイベントを設定
  const onChangeToDoText = (e) => {
    return setToDoText(e.target.value);
  };

  //追加ボタンが押された時、テキストを追加する処理
  const onClickToDoAdd = () => {
    if (toDoText === "") return;
    console.log(toDoText);
    const newToDos = [...incompleteToDos, toDoText];
    setIncompleteToDo(newToDos);
    setToDoText("");
  };

  //削除ボタン押下した時のアクション
  const onClickDelete = (index) => {
    const newToDos = [...incompleteToDos];
    newToDos.splice(index, 1);
    setIncompleteToDo(newToDos);
  };

  //完了ボタン押下
  const onClickComplete = (index) => {
    const newInCompleteToDos = [...incompleteToDos];
    newInCompleteToDos.splice(index, 1);

    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDo(newInCompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  //戻すボタン押下
  const backInComplete = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);
    setCompleteToDos(newCompleteToDos);

    const backInCompleteToDos = [...incompleteToDos, completeToDos[index]];
    setIncompleteToDo(backInCompleteToDos);
  };

  return (
    <>
      {incompleteToDos.length >= 5 && alert("早く仕事して")}
      <InputArea
        toDoText={toDoText}
        onChangeToDoText={onChangeToDoText}
        onClickToDoAdd={onClickToDoAdd}
        disabled={incompleteToDos.length >= 5} //true or false を返す
      />
      <IncompleteArea
        incompleteToDos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea
        completeToDos={completeToDos}
        backInComplete={backInComplete}
      />
    </>
  );
};
