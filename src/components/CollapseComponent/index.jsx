import './index.scss'
import VectorUp from '../../assets/VectorUp.svg'
import VectorDown from '../../assets/VectorDown.svg'

import { useRef, useState } from 'react'

export default function CollapseComponent({ title, value }) {

    const [opened, openComponent] = useState(false)

    const parentRef = useRef()

    return(
        <div className='collapse_item'>
            <div className='title_container' onClick={()=>openComponent(!opened)}>
                <h3 className='title'>{title}</h3>
                <img src={opened ? VectorUp : VectorDown} alt="Chevron vers le haut"/>
            </div>
            <div
                className='value-parent'
                ref={parentRef}
                style={ opened ? {height: parentRef.current.scrollHeight+'px'} : {height: '0px'} }
            >
                <div className='value'>{value}</div>
            </div>
        </div>
    )
}