import "./Banner.scss"

export default function Banner({ image,text }) {
    return <>
        <div className="banner">
            <img src={image} alt="banner" />
            <p>{text}</p>
        </div>
    </>
}