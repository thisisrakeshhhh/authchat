import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("No such user found!");
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input 
                type="text" 
                placeholder="Search…" 
                className="input input-bordered rounded-full bg-slate-900/50 text-white placeholder-gray-400 border-none w-full shadow-lg focus:ring-1 focus:ring-cyan-500 transition-all outline-none" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-circle bg-cyan-500 hover:bg-cyan-400 text-white border-none shadow-lg shadow-cyan-500/30">
                <IoSearchSharp className="w-5 h-5 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
