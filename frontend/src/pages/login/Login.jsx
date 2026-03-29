import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 bg-neutral-900/40 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/20 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10">
                <h1 className="text-3xl font-bold text-center text-gray-100 mb-6 drop-shadow-sm">
                    Login to <span className="text-cyan-400">AuthChat</span>
                </h1>
                
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-200">Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter username" 
                            className="w-full input input-bordered h-10 bg-gray-800/50 text-white placeholder-gray-400 border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-200">Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="w-full input input-bordered h-10 bg-gray-800/50 text-white placeholder-gray-400 border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                        />
                    </div>

                    <Link to="/signup" className="text-sm text-gray-300 hover:text-cyan-400 hover:underline mt-2 inline-block transition-colors">
                        {"Don't"} have an account?
                    </Link>

                    <button className="btn btn-block mt-4 bg-cyan-600 hover:bg-cyan-500 text-white border-none shadow-lg shadow-cyan-500/30 transition-all duration-300">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login