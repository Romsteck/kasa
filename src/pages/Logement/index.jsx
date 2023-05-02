import { useParams } from "react-router-dom"
import CollapseComponent from "../../components/CollapseComponent"
import Logements from '../../data/logements.json'
import './index.scss'

export default function Logement() {

    const { selectedLogementId } = useParams()

    const selectedLogement = Logements.find(l=>l.id===selectedLogementId)

    return(
        <div className="logement_container">
            <div className="slider_temp_container"></div>
            <div className="description_main_container">
                <div className="presentation_container">
                    <div className="name_location_container">
                        <h1 className="name">{selectedLogement.title}</h1>
                        <p className="location">{selectedLogement.description}</p>
                    </div>
                    <div className="publisher_container">
                        <p className="name"></p>
                        <img className="picture" src="" alt="" />
                    </div>
                </div>
                <div className="notation_container">
                    <div className="tags_container"></div>
                    <div className="stars_container"></div>
                </div>
                <div className="description_container">
                    <CollapseComponent title='Description' value='Description' />
                    <CollapseComponent title='Description' value='Description' />
                </div>
            </div>
        </div>
    )
}