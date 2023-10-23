import { useEffect } from "react"
import { useState } from "react"
import GalleryImage from "../GalleryImage"  
import { Link } from "react-router-dom"

export default function ShowGallery() { 
    const url = "https://api.tvmaze.com/shows"

    const [shows, setShows] = useState([]);
    useEffect(() => {
        async function displayShows() { 
            try {
                const response = await fetch(url)
                const data = await response.json()
                setShows(data);
            } catch (error) {
                console.log(error)
            }
        }
        displayShows()

     }, [])
    return <div className="shows">
        {shows.map(show =><Link to={`${show.id}`} key={show.id}><GalleryImage show={show}  /></Link> 
            
        )}
    </div>
}