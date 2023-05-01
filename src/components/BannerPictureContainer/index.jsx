import './index.scss'

export default function BannerPictureContainer({ picture }) {
    return(
        <img className='banner_picture' src={picture} />
    )
}