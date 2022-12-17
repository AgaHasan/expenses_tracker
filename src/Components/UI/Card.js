import "./Card.css";


function Card() {
    const classes = "card " + props.className;
    return <div className ={classes}>{props.children}</div>
}

export default Card;