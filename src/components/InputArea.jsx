import React from "react";

export const InputArea = (props) => {
  const { toDoText, onChangeToDoText, onClickToDoAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="追加"
        value={toDoText}
        onChange={onChangeToDoText}
      />
      <button disabled={disabled} onClick={onClickToDoAdd}>
        追加
      </button>
    </div>
  );
};
