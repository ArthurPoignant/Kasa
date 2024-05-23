import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import data from "../data/logements.json"
import LogementDetail from "../components/LogementDetail"

export default function Logement() {
    const idLogement = useParams();
    const logement = data.find((logement) => logement.id === idLogement.logementId)
    if (logement === undefined) {
        return (
            <Navigate to="*" replace={true} />
        )

    } else {
        return (
            <LogementDetail logement={logement} />
        )
    }
}