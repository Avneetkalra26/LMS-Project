import React from 'react'
import useSound from 'use-sound';
import sound from '../../assets/mouse-click.mp3';
import { Link } from 'react-router-dom';
export default function ContentBanner({ courseTitle }) {
    const [play] = useSound(sound);
    return (
        <div className="mx-4 mt-4 flex items-center justify-between">
            <div className='flex gap-6'>
                <font className='fs-5'
                    style={{ color: "#611f69", textShadow: "3px 3px 3px violet" }}>{courseTitle}</font>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-36 outline-none p-2.5 ">
                    <option selected>Level 1</option>
                    <option value="beginnerVal">Beginner Level</option>
                </select>
            </div>
            <Link to="/mainpage">
                <button className='btn btn-primary mr-6 px-6'
                    style={{ backgroundColor: "#611f69", border: "none" }} onClick={play}>
                    Back
                </button>
            </Link>
        </div>
    )
}

