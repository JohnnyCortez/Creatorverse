import { Link } from "react-router-dom"
function Creator(props) {
    return (
        <>
        <div class="card">
            <Link to="/view" state={{id: props.creator.id}}> 
                <img class = "creator-pic" src = {props.creator.imageurl} style={{width:"100%"}}></img>               
            </Link>
            <div class="container">
            <Link to="/view" state={{id: props.creator.id}}> 
            <h4><b>{props.creator.name}</b></h4>
            </Link>
            <p>{props.creator.description}</p>
            <a href = {props.creator.url}>creator content</a>
            <br/>
            <Link to="/edit" state={{id: props.creator.id}}><button>Edit</button></Link>
            </div>
        </div>
        </>
    )
}

export default Creator