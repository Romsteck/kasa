import './index.scss'

export default function BannerPictureContainer({ picture, text }) {
    return(
        <div className="banner_container">
            <img className='picture' src={picture} />
            <p className='text'>{text}</p>
        </div>
    )
}