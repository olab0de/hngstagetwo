import React from 'react'
import {Link} from 'react-router-dom'

export default function Button(props) {
    return (
        <Link id={props.id} className='btn' to={props.href}>
            {props.children}
        </Link>
    )
}