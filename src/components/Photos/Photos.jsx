import { useEffect, useState } from "react";
import axios from 'axios';
import DisplayPhoto from "../DisplayPhoto/DisplayPhoto";
import './Photo.css'

export default function Photos() {
    const URL = 'https://api.slingacademy.com/v1/sample-data/photos?limit=20';
    const [photo, setPhoto] = useState([]);

    async function downloadPhotos() {
        const response = await axios.get(URL);
        // console.log(response.data);
        const responseResults = response.data.photos;
        // console.log(responseResults);
        const photoResultPromise = responseResults.map((photo) => {
            return {
                title: photo.title,
                image: photo.url,
                description: photo.description,
                id: photo.id
            }
        })
        console.log(photoResultPromise);
        setPhoto(photoResultPromise);

    }
    useEffect(() => {
        downloadPhotos()
    }, [URL]);

    return (
        <div className="photoList-wrapper">
            {photo.map((p) => <DisplayPhoto image={p.image} key={p.id} id={p.id}/>)}
        </div>
    )
}