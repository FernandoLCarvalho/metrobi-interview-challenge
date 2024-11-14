import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ZenosParadox() {
    const navigate = useNavigate();
    const [achillesPosition, setAchillesPosition] = useState(0);
    const [tortoisePosition, setTortoisePosition] = useState(40);
    const [distance, setDistance] = useState(50);

    useEffect(() => {
        // Set up an interval to update positions regularly
        const interval = setInterval(() => {

            // Condition to stop the animation when distance becomes very small
            if (distance > 0.2) {

                // Achilles moves halfway towards the Tortoise
                const newAchillesPosition = achillesPosition + distance / 2;
                setAchillesPosition(newAchillesPosition);

                // The Tortoise also moves forward, but at a slower rate (1/4 of the distance)
                const newTortoisePosition = tortoisePosition + distance / 4;
                setTortoisePosition(newTortoisePosition);

                // Calculate the new distance between Achilles and the Tortoise
                const newDistance = newTortoisePosition - newAchillesPosition;

                // Update the distance state, but keep it slightly above zero to avoid stopping completely
                setDistance(newDistance > 0 ? newDistance : 0.1);
            } else {
                // Clear the interval to stop the animation when distance is very small
                clearInterval(interval);
            }
        }, 1000);

        // Clear the interval if the component unmounts
        return () => clearInterval(interval);
    }, [achillesPosition, tortoisePosition])

    return (
        <div className="flex flex-col items-center justify-center bg-black h-screen w-screen">
            <h1 className="text-white text-2xl mb-8 text-center">Zeno's Paradox of Achilles and the Tortoise</h1>

            <div className="relative w-full max-w-lg h-[20vh] bg-gray-700 border-2 border-gray-500 flex items-center">
                {/* Tortoise */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl"
                    style={{ left: `${tortoisePosition}%` }}
                >
                    🐢 {/* https://emojipedia.org/turtle */}
                </div>

                {/* Aquiles */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl"
                    style={{ left: `${achillesPosition}%` }}
                >
                    🏃‍➡️ {/* https://emojipedia.org/person_running_facing_right */}
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
