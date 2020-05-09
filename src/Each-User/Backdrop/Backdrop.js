import React from 'react'
import styling from './Backdrop.module.css'

export default function Backdrop(props) {
    return (
        <div className={styling.ShowDetails}>
            {props.children}
        </div>
    )
}
