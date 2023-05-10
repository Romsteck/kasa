import { useParams } from "react-router-dom"
import NotFound from '../NotFound'
import ImagesSlider from "../../components/ImagesSlider"
import CollapseComponent from "../../components/CollapseComponent"
import RatingControl from "../../components/Rating"
import Logements from '../../data/logements.json'
import './index.scss'

export default function Logement() {

    const { selectedLogementId } = useParams()

    const selectedLogement = Logements.find(l=>l.id===selectedLogementId)

    if (!selectedLogement) {
        return(<NotFound />)
    } else {
        return(
            <div className="logement_page_container">
                <ImagesSlider links={selectedLogement.pictures} />
                <div className="description_main_container">
                    <div className="presentation_container">
                        <div className="name_location_container">
                            <h1 className="name">{selectedLogement.title}</h1>
                            <p className="location">{selectedLogement.location}</p>
                            <div className="tags_container">{selectedLogement.tags.map(tag=>(<div key={tag} className="tag_value">{tag}</div>))}</div>
                        </div>
                        <div className="publisher_rating_container">
                            <div className="publisher_container">
                                <p className="name">{selectedLogement.host.name}</p>
                                <img className="picture" src={selectedLogement.host.picture} alt="Hôte" />
                            </div>
                            <RatingControl value={selectedLogement.rating} />
                        </div>
                    </div>
                    <div className="description_container">
                        <CollapseComponent
                            className='collapse'
                            title='Description'
                            value={selectedLogement.description}
                        />
                        <CollapseComponent
                            className='collapse'
                            title='Équipements'
                            value={selectedLogement.equipments.map((equipment) => (<p key={equipment}>{equipment}<br /></p>))}
                        />
                    </div>
                </div>
            </div>
        )
    }
}