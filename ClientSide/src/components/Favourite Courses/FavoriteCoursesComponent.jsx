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

    const handleRemoveFromFavorites = async (cardId, index) => {
        try {
            await axios.put(`http://localhost:3000/api/v1/updatefavcards/${cardId}`, {
                favourite: false
            });
            setFavouriteList(prevList => [
                ...prevList.slice(0, index),
                ...prevList.slice(index + 1)
            ]);
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

            {favouriteList.length == 0 ?
                <div>
                    <h1 className='text-xl text-customBlue ml-11 font-semibold'>No favourite courses !!!</h1>
                </div>
                : (<div className='grid grid-cols-4 mx-10 gap-5'>
                    {favouriteList.map((value, index) => (
                        <FavouriteCards
                            key={value._id}
                            data={value}
                            index={index}
                            onRemoveFromFavorites={handleRemoveFromFavorites}
                        />
                    ))}
                </div>)}
        </div>
    );
}
