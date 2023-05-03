import { useParams } from "react-router-dom"
import ImagesSlider from "../../components/ImagesSlider"
import CollapseComponent from "../../components/CollapseComponent"
import RatingControl from "../../components/rating"
import Logements from '../../data/logements.json'
import './index.scss'

export default function Logement() {

    const { selectedLogementId } = useParams()

    const selectedLogement = Logements.find(l=>l.id===selectedLogementId)

    return(
        <div className="logement_page_container">
            <ImagesSlider links={selectedLogement.pictures} />
            <div className="description_main_container">
                <div className="presentation_container">
                    <div className="name_location_container">
                        <h1 className="name">{selectedLogement.title}</h1>
                        <p className="location">{selectedLogement.location}</p>
                        <div className="tags_container">{selectedLogement.tags.map(tag=>(<div className="tag_value">{tag}</div>))}</div>
                    </div>
                    <div className="publisher_rating_container">
                        <div className="publisher_container">
                            <p className="name">{selectedLogement.host.name}</p>
                            <img className="picture" src={selectedLogement.host.picture} alt="Photo de l'hôte" />
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
                        value={selectedLogement.equipments.map((equipment) => (<>{equipment}<br /></>))}
                    />
                </div>
            </div>
        </div>
    )
}