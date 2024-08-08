import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import image from "../ImageSource1.jpg";
import "./Home.scss";

export default function Home() {
    const text = "Chez vous, partout et ailleurs";
    const [logements, setLogements] = useState([]);
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
                setLogements(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error loading data.</div>;
    }

    return (
        <>
            <Banner image={image} text={text} />
            <div className="card-container">
                {logements.map((logement) => (
                    <Card
                        picture={logement.cover}
                        title={logement.title}
                        id={logement.id}
                        key={logement.id}
                    />
                ))}
            </div>
        </>
    );
}
