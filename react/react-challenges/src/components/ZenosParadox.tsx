import { useNavigate } from 'react-router-dom';

export default function ZenosParadox() {

    const navigate = useNavigate();

    return (
        <div>


            {/* Added a "go back" button to return to main page */}
            <div className='flex mt-24 justify-center'>
                <button className="w-1/2 px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out" onClick={() => navigate('/')}>
                    Go back
                </button>
            </div>

        </div>
    )
}