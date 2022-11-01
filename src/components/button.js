import React from 'react'

export default function Button(props) {
    return (
        <a id={props.id} className='btn' href={props.href}>
            {props.children}
        </a>
    )
}