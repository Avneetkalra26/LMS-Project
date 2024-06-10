import React from 'react';
import useSound from 'use-sound';
import sound from '../../assets/mouse-click.mp3';
import { Link } from 'react-router-dom';

export default function ContentBanner({ courseTitle }) {
    const [play] = useSound(sound);
    return (
        <div className="mx-5 mt-5 flex items-center justify-between">
            <div className='flex gap-6'>
                <font className='text-xl fw-semibold ' style={{ color: "#0C7185", textShadow: "2px 2px 3px #1BC6CF" }}>
                    {courseTitle}
                </font>
                {/* <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-36 outline-none p-2.5">
                    <option value="level1">Level 1</option>
                    <option value="beginnerVal">Beginner Level</option>
                </select> */}
            </div>
            <Link to="/">
                <button onClick={play} className='px-7 py-2 text-white rounded-lg mr-4' style={{ backgroundColor: "#0C7185", border: "none" }}>
                    Back
                </button>
            </Link>
        </div>
    );
}
