import "./Rating.scss"
import fullstar from "../fullstar.png"
import emptystar from "../emptystar.png"

export default function Rating({ rate }) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <span key={i}>
                {i < rate ? <img src={fullstar} alt="img-fullstar" className="star"/> : <img src={emptystar} alt="img-emptyStar" className="star"/>}
            </span>
        );
    }

    return (
        <div className="stars">
            {stars}
        </div>
    );
}