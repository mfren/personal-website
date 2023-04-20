
export function NavBar() {

    return (
        <div className="static w-full h-10 bg-gray-800 bg-opacity-50">
            <div className="flex justify-around items-center h-full">
                <button className="text-white font-bold text-2xl">About</button>
                <button className="text-white font-bold text-2xl">Skills</button>
                <button className="text-white font-bold text-2xl">Experience</button>
                <button className="text-white font-bold text-2xl">Contact</button>
            </div>
        </div>
    )
}