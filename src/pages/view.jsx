import { supabase } from "../client"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function View() {
    const [creator, setCreator] = useState([])
    const location = useLocation();
    const id = location.state?.id;

    console.log("view", id)
    useEffect(() => {
        async function getCreator(id) {
            const { data, error } = await supabase
              .from("creators")
              .select("*")
              .eq("id", id)
              .single()
            if (error) {
              console.error(error);
              return null;
            }
            console.log(data)
            setCreator(data)
            return data;
          }

          getCreator(id)

    }, [id])

    return (
        <>
            <h2>View</h2>
            <div>
                <p>{creator.name}</p>
                <img class="creator-pic" src = {creator.imageurl}></img>
                <p>{creator.description}</p>
                <a href = {creator.url}>creator content</a>
                <br/>
                <Link to="/edit" state={{id: creator.id}}><button>Edit</button></Link>
            </div>
        </>
    )
}

export default View