import BannerPictureContainer from '../../components/BannerPictureContainer'
import CollapseComponent from '../../components/CollapseComponent'
import AboutBannerPicture from '../../assets/About_Banner.svg'
import aboutData from './details'
import './index.scss'

export default function About() {
    return(
        <div className='about_page_container'>
            <BannerPictureContainer picture={AboutBannerPicture} />
            <div className='collapse_gallery'>
                {aboutData.map((a, index)=>(
                    <CollapseComponent
                        title={a.title}
                        value={a.value}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}