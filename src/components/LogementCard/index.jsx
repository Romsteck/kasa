import './index.scss'

export default function LogementCard({ title }) { 
    return(
        <div className='logement_container'>
            <p className='title'>{title}</p>
        </div>
    )
}