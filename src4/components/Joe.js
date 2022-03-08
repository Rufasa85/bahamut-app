import React from 'react'
import {useStudentContext} from "../utils/StudentContext"

export default function Joe() {
    const {students} = useStudentContext()
    return (
        <div>
            <h1>All student names:</h1>
            {students.map(stu=><h3 key={stu.id}>{stu.name}</h3>)}
        </div>
    )
}
