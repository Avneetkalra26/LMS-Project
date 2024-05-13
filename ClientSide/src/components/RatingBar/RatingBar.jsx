import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function RatingBar({initialRating,cardId}) {
    const [rating, setRating] = useState(initialRating) // Initial value
    const updateRating = () =>{
      axios.put(`http://localhost:3000/api/v1/updaterating/${cardId}`,{
        rating
      }).then((response)=>{
        console.log(response.data.message)
      })
    }
    useEffect(()=>{
      updateRating()
    },[rating])
    return(
   <div className='flex'>
     <Rating style={{ maxWidth: 120}} value={rating} onChange={setRating} />
     <span className='text-gray-600 text-sm m-2'>
        {rating == 0 ? 'No Rating' : `${rating} out of 5 stars`}
     </span>
   </div>
    )
}