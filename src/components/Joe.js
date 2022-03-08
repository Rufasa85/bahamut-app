import React from 'react'
import {useSelector} from "react-redux"
import AddMajor from './AddMajor';

export default function Joe() {
    const students = useSelector(state => state.students)
    return (
        <div>
            {students.map(stu=><p key={stu.id}>{stu.name} is studying {stu.major}</p>)}
            <AddMajor/>
        </div>
    )
}
