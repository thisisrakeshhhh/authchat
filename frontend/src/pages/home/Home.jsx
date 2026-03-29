import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
    return (
        <div className="flex h-[80vh] sm:h-[450px] md:h-[650px] rounded-2xl overflow-hidden bg-black/10 bg-clip-padding backdrop-filter backdrop-blur-xl border border-gray-100/20 shadow-2xl transition-all duration-300">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;