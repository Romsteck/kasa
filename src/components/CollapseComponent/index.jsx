import './index.scss'
import VectorUp from '../../assets/VectorUp.svg'
import VectorDown from '../../assets/VectorDown.svg'

import { useState } from 'react'

export default function CollapseComponent({ title, value }) {

    const [opened, openComponent] = useState(false)

    return(
        <div className='collapse_item'>
            <div className='title_container' onClick={()=>openComponent(!opened)}>
                <h3 className='title'>{title}</h3>
                <img src={opened ? VectorUp : VectorDown} alt="Chevron vers le haut"/>
            </div>
            {opened ? <p className={'value'}>{value}</p> : null}
        </div>
    )
}