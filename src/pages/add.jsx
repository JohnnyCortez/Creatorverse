import { supabase } from "../client"
import { useState } from "react";

function Add() {
    const [creator, setCreator] = useState(null)
    const [descr, setDescr] = useState(null)
    const [link, setLink] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)


    const addCreator = async () => {
        await supabase
          .from("creators")
          .insert({
            name: creator,
            description: descr,
            url: link,
            imageurl: imgUrl,
          })
          .select();
        console.log("success");
        window.location = "/";
      };

      function handleClick() {
        addCreator();
      }

    return (
        <>
            <h2>Add Creator</h2>
        <div class="form">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setCreator(e.target.value)}
          />

          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setDescr(e.target.value)}
          />

          <label>Image Url:</label>
          <input
            type="text"
            onChange={(e) => setImgUrl(e.target.value)}
          />

          <label>Content Page Url:</label>
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>Submit</button>
        </div>

        </>
    )
}

export default Add