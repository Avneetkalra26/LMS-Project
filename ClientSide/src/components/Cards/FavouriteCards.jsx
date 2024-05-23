import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FavouriteCards({ data, onRemoveFromFavorites }) {
    const [fill, setFill] = useState(data.favourite);

    const handleToggleFavorite = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/updatefavcards/${data._id}`, {
                favourite: !fill
            });

            if (response.data.success) {
                setFill(!fill);
                // If successfully removed from favorites, call the callback function to update the UI in the parent component
                if (!fill && onRemoveFromFavorites) {
                    onRemoveFromFavorites(data._id);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!fill) {
        return null; // Do not render the card if it's not a favorite
    }

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md relative">
                <Link to={"/contentpage?id=" + data._id}>
                    <img className="h-36 w-full object-cover rounded-t-lg" src={data.imageUrl} alt={data.title} />
                </Link>
                <div className="rounded-full bg-white absolute top-2 right-3 p-1">
                    <svg
                        onClick={handleToggleFavorite}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={fill ? "red" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="w-6 h-6 cursor-pointer "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                    <p className="text-sm text-gray-600 mt-2 mb-4">{data.description}</p>
                </div>
            </div>
        </div>
    );
}
