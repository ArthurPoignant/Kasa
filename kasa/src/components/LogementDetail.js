import "./LogementDetail.scss"
import Rating from "./Rating"
import Collapse from "./Collapse"
import Carrousel from "./Carrousel"

export default function LogementDetail({ logement }) {
    const nameArray = logement.host.name.split(' ')
    return <>
        <div className="logementDetail">
            <div className="Carousel">
                <Carrousel pictureArray={logement.pictures} />
            </div>
            <div className="part-one">
                <div className="part-one_leftside">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className="part-one_rightside">
                    <div className="name">{nameArray.map((name, index) => (
                        <p key={index}>{name}</p>
                    ))}</div>
                    <img src={logement.host.picture} alt="hostpicture" />
                </div>
            </div>
            <div className="part-two">
                <div className="part-two_leftside">
                    {logement.tags.map((tag) => (
                        <p key={tag}>
                            {tag}
                        </p>
                    ))}
                </div>
                <div className="part-two_rightside">
                    <Rating rate={logement.rating} />
                </div>
            </div>
            <div className="part-three">
                <Collapse className="collapse_logement" title="Description" content={logement.description} />
                <Collapse className="collapse_logement" title="Équipements" content={logement.equipments} />
            </div>
        </div>
    </>
}