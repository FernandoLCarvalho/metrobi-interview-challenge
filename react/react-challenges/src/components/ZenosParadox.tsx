import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ZenosParadox() {
    const navigate = useNavigate();
    const [achillesPosition, setAchillesPosition] = useState(0);
    const [tortoisePosition, setTortoisePosition] = useState(400);
    const [distance, setDistance] = useState(500); 

    useEffect(() => {
        const interval = setInterval(() => {

            if (distance > 0.2) {

                const newAchillesPosition = achillesPosition + distance / 2;
                setAchillesPosition(newAchillesPosition);

                const newTortoisePosition = tortoisePosition + distance / 4;
                setTortoisePosition(newTortoisePosition);

                const newDistance = newTortoisePosition - newAchillesPosition;
                setDistance(newDistance > 0 ? newDistance : 0.1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [achillesPosition, tortoisePosition]);

    return (
        <div className="flex flex-col items-center justify-center bg-black h-[100vh]">

            <h1 className='text-white text-xl mb-10'>Zeno's Paradox of Achilles and the Tortoise</h1>

            <div className="relative w-1/2 h-1/4 bg-gray-700 border-2 border-gray-500 flex flex-row justify-center items-center">
                {/* Tortoise */}
                <div
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 rounded-full text-6xl" 
                    style={{ left: `${tortoisePosition}px` }}
                >
                    🐢
                </div>

                {/* Aquiles */}
                <div
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 rounded-full text-6xl" 
                    style={{ left: `${achillesPosition}px` }}
                >
                    🏃‍➡️
                </div>
            </div>

            {/* Back Button */}
            <div className='flex mt-24 justify-center'>
                <button className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out" onClick={() => navigate('/')}>
                    Go back
                </button>
            </div>
        </div>
    );
}
