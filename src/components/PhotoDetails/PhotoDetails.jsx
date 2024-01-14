import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './PhotoDetails.css'

export default function DisplayPhoto() {
    const { id } = useParams();
    const [photo, setPhoto] = useState([]);
    const URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

    async function downloadPhotos() {
        const response = await axios.get(URL);
        console.log(response.data);
        const photoData = response.data
        setPhoto({
            title: photoData.photo.title,
            image: photoData.photo.url,
            description: photoData.photo.description,
            // id: photo.id
        })
    }

    useEffect(() => {
        downloadPhotos()
    }, []);
    return (
        <div className="outerWrapper">
            <div className="imageDiv">
                <img src={photo.image}/>
            </div>
            <div className="textDiv">
                <h1>{photo.title}</h1>
                <p>{photo.description}</p>
            </div>
        </div>
    )
}