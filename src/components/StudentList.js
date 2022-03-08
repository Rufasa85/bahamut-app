//  Import useReducer so that we can use it in this component
import React from 'react';
import {useDispatch, useSelector} from "react-redux"

//  Import our type variables
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_STUDENT_NAME,
  SET_STUDENT_MAJOR,
} from '../utils/actions';
//  Import our reducer

// Import our custom useStudentContext hook to have access to the initial state



export default function StudentList() {
  // The value property from our Student provider is made available from our custom hook. Here we pluck off the student array from our initial state.
  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  return (
    <div>
      {/* //  Refactor to access `students` from our state object */}
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* //Refactor to access `students` from our state object */}
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: Call dispatch method with an object containing type and payload
                          // Your code here
                        
                          dispatch({
                            type:REMOVE_STUDENT,
                            payload:student.id
                          })
                         
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={state.studentName}
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_NAME, payload: e.target.value })
                }
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_MAJOR, payload: e.target.value })
                }
                value={state.studentMajor}
              >
                <option>Choose major...</option>
                {/* //  Refactor to access `students` from our state object */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  if(state.studentName && state.studentMajor){
                    dispatch({
                      type:ADD_STUDENT,
                      payload:{
                        name:state.studentName,
                        major:state.studentMajor
                      }
                    })
                  }
                  //Call dispatch method with an object containing type and payload for adding a new student
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
