import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home page is here!</h1>
            <h2>Check it out!</h2>
            <Link to="/about">ABout PAGE</Link>
        </div>
    )
}
