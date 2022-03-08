import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {UPDATE_STUDENT} from "../utils/actions"

export default function UpdateStudent() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [editStudent, setEditStudent] = useState({
        id:0,
        name:"",
        major:""
    })
    const handleSelectChange = e=>{
        if(e.target.value===""){
            setEditStudent({
                id:0,
                name:"",
                major:""
            })
            return
        }
        const selectedStudent = state.students.filter(stu=>stu.id==e.target.value)
        console.log(selectedStudent)
        setEditStudent(selectedStudent[0])
    }
    return (
        <div>
            <h2>UpdateStudent</h2>
                <select onChange={handleSelectChange} value={editStudent.id}>
                    <option  value="">Select student....</option>
                    {state.students.map(stu=>{
                       return <option key={stu.id} value={stu.id}>{stu.name}</option>
                    })}
                </select>
            <form onSubmit={e=>{
                e.preventDefault();
                dispatch({
                    type:UPDATE_STUDENT,
                    payload:editStudent
                })
                setEditStudent({
                    id:0,
                    name:"",
                    major:""
                })
            }}>
                    {editStudent.id?<input value={editStudent.name} onChange={e=>setEditStudent({...editStudent,name:e.target.value})}/>:null}
                    {editStudent.id?(
                        <select value={editStudent.major} onChange={e=>setEditStudent({...editStudent,major:e.target.value})}>
                            {state.majors.map((maj,i)=><option key={i}>{maj}</option>)}
                        </select>
                    ):null}
                    {editStudent.id? <button>Edit!</button>:null}
            </form>
        </div>
    )
}
