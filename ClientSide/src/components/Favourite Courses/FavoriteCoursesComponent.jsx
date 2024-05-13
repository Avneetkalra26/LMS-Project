import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FavouriteCardBanner from '../Banner/FavouriteCardBanner'
import FavouriteCards from '../Cards/FavouriteCards'
export default function FavoriteCoursesComponent() {
    const [favouriteList, setFavouriteList] = useState([])
    const getFavouriteCards = () => {
        try {
            axios.get("http://localhost:3000/api/v1/favouriteCards")
                .then((response) => {
                    setFavouriteList(response.data.favouriteData)
                })
        }
        catch (error) {
            const errorMsg = error.response.data
            console.log(errorMsg)
        }
    }
    useEffect(() => {
        getFavouriteCards();
    }, [])
    return (
        <div>
            <Navbar />
            <FavouriteCardBanner />
            <div className='grid grid-cols-4 mx-10 gap-5'>
                {favouriteList.map((value, index) => (
                    <div key={index} className='mb-5'>
                        <FavouriteCards data={value} />
                    </div>
                ))
                }
            </div >
        </div>
    )
}