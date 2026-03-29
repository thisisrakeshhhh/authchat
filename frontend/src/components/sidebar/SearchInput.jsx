import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search…" className="input input-bordered rounded-full bg-slate-900/50 text-white placeholder-gray-400 border-none w-full shadow-lg focus:ring-1 focus:ring-cyan-500 transition-all outline-none" />
            <button type="submit" className="btn btn-circle bg-cyan-500 hover:bg-cyan-400 text-white border-none shadow-lg shadow-cyan-500/30">
                <IoSearchSharp className="w-5 h-5 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
