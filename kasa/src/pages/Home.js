import Banner from "../components/Banner"
import Card from "../components/Card"
import image from "../ImageSource1.jpg"
import data from "../data/logements.json"
import "./Home.css"

export default function Home() {
    const text = "Chez vous, partout et ailleurs"

    return (
        <>
            <Banner image={image} text={text} />
            <div className="card-container">
                {data.map((logement) => (
                    <Card picture={logement.cover} title={logement.title} id={logement.id} key={logement.id}/>
                ))}
            </div>
        </>
    )
}
