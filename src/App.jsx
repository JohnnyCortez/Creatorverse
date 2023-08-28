import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Edit from './pages/edit'
import View from './pages/view'
import Show from './pages/show'
import Add from './pages/add'
import { supabase } from './client'
import { useEffect } from 'react'

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function getCreators() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")

      if (error) {
        console.error(error);
        return null;
      }
      console.log(data)
      setCreators(data)
      return data;
    }

    getCreators()

  }, [])

  return (
    <>
    <h1>Creatorverse</h1>
    <ul>
    <li><a href = "/" class="navLink">Home</a></li>
    <li><a href = "/add" class="navLink">Add Creator</a></li>
    </ul>
     <Routes>
        <Route exact path = "/edit" element = {<Edit/>} />
        <Route exact path = "/view" element = {<View/>} />
        <Route exact path = "/" element = {<Show creators = {creators}/>} />
        <Route exact path = "/add" element = {<Add/>} />

     </Routes>
    </>
  )
}

export default App
