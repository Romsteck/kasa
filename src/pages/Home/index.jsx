import BannerPictureContainer from '../../components/BannerPictureContainer'
import HomepageBannerPicture from '../../assets/Homepage_Banner.svg'
import LogementCard from '../../components/LogementCard'
import Logements from '../../data/logements.json'
import './index.scss'

export default function Home() {

    return(
        <div className='homepage_container'>
            <BannerPictureContainer picture={HomepageBannerPicture} text={'Chez vous, partout et ailleurs'}/>
            <div className='logements_gallery'>
                {Logements.map(l=>(
                    <LogementCard
                        title={l.title}
                        cover={l.cover}
                        key={l.id}
                        id={l.id}
                    />
                ))}
            </div>
        </div>
    )
}