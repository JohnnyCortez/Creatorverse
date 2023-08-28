import { supabase } from "../client"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function Edit() {
    const [data, setData] = useState([])
    const location = useLocation();
    const id = location.state?.id;


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
            setData(data)
            console.log(creator)
            return data;
          }

          getCreator(id)

    }, [id])

    const [creator, setCreator] = useState("");
    const [descr, setDescr] = useState("");
    const [link, setLink] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        if (data) {
            setCreator(data.name);
            setDescr(data.description);
            setLink(data.url);
            setImgUrl(data.imageurl);
        }
    }, [data]);

    const updateCreator = async () => {
        await supabase
          .from("creators")
          .update({
            name: creator,
            description: descr,
            url: link,
            imageurl: imgUrl,
          })
          .eq("id", id)
          .select();
          window.location = "/";
        };




    function handleClick() {
        updateCreator();
    }

    const deleteCreator = async () => {
        await supabase.from("creators").delete().eq("id", id);
        window.location = "/";
      };

    function handleDelete() {
        deleteCreator();
      }

    return (
        <>
        <h2>Edit Creator</h2>
        <div class="form">
          <label>Name:</label>
          <input
            type="text"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />

          <label>Description:</label>
          <input
            type="text"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />

          <label>Image Url:</label>
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />

          <label>Content Page Url:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>Submit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        </>
    )
}

export default Edit