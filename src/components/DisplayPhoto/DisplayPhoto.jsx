import { Link } from 'react-router-dom'
import './DisplayPhoto.css'

export default function DisplayPhoto({ title, description, image, id }) {
    return (
        <div>
            <Link to={`/photos/${id}`}>
                <div className='display-wrapper'>
                    <div>
                        <img src={image} className='display-wrapper-image' />
                    </div>
                    <div>
                        {title}
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            </Link>
        </div>
    )
}