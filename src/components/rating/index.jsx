import Star_Filled from '../../assets/Star_Filled.svg'
import Star_Blank from '../../assets/Star_Blank.svg'
import './index.scss'

export default function RatingControl({ value }) {
    return(
        <div className='rating_control_container'>
            {[1,2,3,4,5].map(n=>(
                <img
                    key={n}
                    src={value >= n ? Star_Filled : Star_Blank}
                    alt="Rating Star"
                />
            ))}
        </div>
    )
}