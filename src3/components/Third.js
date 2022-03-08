import React from 'react'
import {useTheme} from "../utils/ThemeContext"

export default function Third() {
    const {darkTheme} = useTheme()
    return (
        <div>
            <h1>Display dark theme value: {`${darkTheme}`}</h1>
        </div>
    )
}
