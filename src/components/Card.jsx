import "./card.css"
const Card =({image,name,description})=>{
    return(
        <div className={"image__container"}>
            <div className={"img__container"}>
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}
export default Card
