import Creator from "../components/creator"

function Show(props) {

    console.log("test", props.creators)

    return (
        <>
            <h2>All Creators</h2>
            {props.creators ? props.creators.map(creator => <Creator key = {creator.id} creator = {creator}/>) : <p>There are currently no creators added</p>}
        </>
    )
}

export default Show