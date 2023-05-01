import BannerPictureContainer from '../../components/BannerPicture'
import AboutBannerPicture from '../../assets/About_Banner.svg'

import CollapseGallery from '../../components/CollapseGallery'

export default function About() {
    return(
        <div>
            <BannerPictureContainer picture={AboutBannerPicture} />
            <CollapseGallery></CollapseGallery>
        </div>
    )
}