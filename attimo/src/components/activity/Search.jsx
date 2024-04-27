import "../../index.css";

export function Search() {
    return (
        <div className="grid">
            <h1 className="mb-7">Your Events</h1>
            <div className="flex justify-between display-mobile">
                <div className="flex">
                    <form  action="/search" method="get">
                        <input className="w-80 h-10 rounded-3xl" type="search" name="q" placeholder="Search by name" />
                    </form>
                </div>
                <div className="flex gap-5">
                    <label className="whitespace-nowrap items-center flex   " htmlFor="">Short by: </label>
                    <select className="block bg-clr-light-gray py-2 px-4 w-full rounded-md focus:outline-none text-clr-white">
                        <option value="1">Category</option>
                    </select>
                    <select className="block bg-clr-light-gray py-2 px-4 w-full rounded-md focus:outline-none text-clr-white">
                        <option value="1">Course</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
