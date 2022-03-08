import React, { useState } from "react";
import { ADD_MAJOR } from "../utils/actions";
import { useDispatch } from "react-redux";

export default function AddMajor() {
  const dispatch = useDispatch();
  const [newMajor, setNewMajor] = useState("");
  return (
    <>
      <h3>Add a major!</h3>
      <form
        onSubmit={(e) => {
            e.preventDefault();
          dispatch({
            type: ADD_MAJOR,
            payload: newMajor
          });
          setNewMajor("");
        }}
      >
        <input value={newMajor} onChange={e => setNewMajor(e.target.value)} />
      </form>
      <hr />
    </>
  );
}
