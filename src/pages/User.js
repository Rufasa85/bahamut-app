import React from 'react'
import { useParams } from 'react-router';

export default function User() {
    const {user} = useParams()
    return (
        <div>
        <h1>page for {user}</h1>
        </div>
    )
}
