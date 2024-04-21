import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react'
export default function RatingBar() {
    const [rating, setRating] = useState(0) // Initial value
    return(
   <div className='flex'>
     <Rating style={{ maxWidth: 120}} value={rating} onChange={setRating} />
     <span className='text-gray-600 text-sm m-2'>
        {rating == 0 ? 'No Rating' : `${rating} out of 5 stars`}
     </span>
   </div>
    )
}