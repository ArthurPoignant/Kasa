import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import "./Logement.scss";

export default function Logement() {
    const { logementId } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/logements.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const foundLogement = data.find((logement) => logement.id === logementId);
                if (foundLogement) {
                    setLogement(foundLogement);
                } else {
                    setError(true);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError(true);
                setLoading(false);
            });
    }, [logementId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <Navigate to="*" replace={true} />;
    }

    const nameArray = logement.host.name.split(' ');

    return (
        <div className="logementDetail">
            <div className="Carousel">
                <Carousel pictureArray={logement.pictures} />
            </div>
            <div className="part-one">
                <div className="part-one_leftside">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="tag">
                        {logement.tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="part-one_rightside">
                    <div className="profile">
                        <div className="name">
                            {nameArray.map((name, index) => (
                                <p key={index}>{name}</p>
                            ))}
                        </div>
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
    );
}
