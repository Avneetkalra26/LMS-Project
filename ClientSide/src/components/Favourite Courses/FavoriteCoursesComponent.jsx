import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import FavouriteCardBanner from '../Banner/FavouriteCardBanner';
import FavouriteCards from '../Cards/FavouriteCards';

export default function FavoriteCoursesComponent() {
    const [favouriteList, setFavouriteList] = useState([]);

    const getFavouriteCards = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/favouriteCards");
            setFavouriteList(response.data.favouriteData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveFromFavorites = async (cardId) => {
        try {
            await axios.put(`http://localhost:3000/api/v1/updatefavcards/${cardId}`, {
                favourite: false
            });
            setFavouriteList(prevList => prevList.filter(card => card._id !== cardId));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFavouriteCards();
    }, []);

    return (
        <div>
            <Navbar />
            <FavouriteCardBanner />
            <div className='grid grid-cols-4 mx-10 gap-5'>
                {favouriteList.map((value, index) => (
                    <div key={index} className='mb-5'>
                        <FavouriteCards data={value} onRemoveFromFavorites={handleRemoveFromFavorites} />
                    </div>
                ))}
            </div>
        </div>
    );
}
