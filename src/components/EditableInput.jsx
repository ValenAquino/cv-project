import React, { useState, useRef  } from "react";

export function EditableInput() {
  const [text, setText] = useState("Hola");
  const [editMode, setEditMode] = useState(false);

  const refInputText = useRef();

  function isInEditMode() {
    return editMode;
  }

  function changeEditMode() {
    setEditMode(!editMode);
  }

  function renderDefaultView() {
    return (
      <>
        <span>{text}</span>
        <button onClick={changeEditMode}>Edit</button>
      </>
    );
  }

  function handleChangeText(){
    setText(refInputText.current.value);
    changeEditMode();
  }

  function renderEditMode() {
    return (
      <>
        <input ref={refInputText} type="text" defaultValue={text}/>
        <button onClick={changeEditMode}>X</button>
        <button onClick={handleChangeText}>OK</button>
      </>
    );
  }

  return (
    <div className="input">
      {
        isInEditMode() 
          ? renderEditMode() 
          : renderDefaultView()
      }
    </div>
  );
}
