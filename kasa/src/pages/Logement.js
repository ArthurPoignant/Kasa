import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import data from "../data/logements.json"
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"
import Carousel from "../components/Carousel"
import "./Logement.scss"

export default function Logement() {
    const idLogement = useParams();
    const logement = data.find((logement) => logement.id === idLogement.logementId)
    const nameArray = logement.host.name.split(' ')
    if (logement === undefined) {
        return (
            <Navigate to="*" replace={true} />
        )

    } else {
        return <>
            <div className="logementDetail">
                <div className="Carousel">
                    <Carousel pictureArray={logement.pictures} />
                </div>
                <div className="part-one">
                    <div className="part-one_leftside">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <div className="tag">{logement.tags.map((tag) => (
                            <p key={tag}>
                                {tag}
                            </p>
                        ))}</div>
                    </div>
                    <div className="part-one_rightside">
                        <div className="profile">
                            <div className="name">{nameArray.map((name, index) => (
                                <p key={index}>{name}</p>
                            ))}</div>
                            <img src={logement.host.picture} alt="hostpicture" />
                        </div>
                        <div className="part-two_rightside">
                            <Rating rate={logement.rating} />
                        </div>
                    </div>
                </div>
                <div className="part-three">
                    <Collapse className="collapse_logement" title="Description" content={logement.description} />
                    <Collapse className="collapse_logement" title="Équipements" content={logement.equipments} />
                </div>
            </div>
        </>
    }
}