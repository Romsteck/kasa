import { useState } from 'react'
import './index.scss'

import Previous from '../../assets/Previous.svg'
import Next from '../../assets/Next.svg'


export default function ImagesSlider({ links }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    function selectPrevious() {
        const newIndex = currentIndex === 0 ? links.length-1 : currentIndex-1
        setCurrentIndex(newIndex)
    }
    function selectNext() {
        const newIndex = currentIndex === links.length-1 ? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }

    if (links.length===1) {
        return(
            <div className="images_slider_container">
                <img className='selected_picture' src={links[currentIndex]} alt="" />
            </div>
        )
    } else {
        return(
            <div className="images_slider_container">
                <img className='selected_picture' src={links[currentIndex]} alt="" />
                <img className='icon previous' onClick={selectPrevious} src={Previous} alt="" />
                <img className='icon next' src={Next} onClick={selectNext} alt="" />
                <p className='counter'>{currentIndex+1}/{links.length}</p>
            </div>
        )
    }
}