import React from 'react'
import {Link} from 'react-router-dom'

export default function Button(props) {
    const external = props.external;
     
    if(external) {
        return <a id={props.id} href={props.href} className='btn' target='_blank'>{props.children}</a>
    }

    return <Link id={props.id} to={props.href} className='btn'>{props.children}</Link>
}