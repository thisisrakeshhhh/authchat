import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../components/hooks/useSignup";

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(inputs);
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 bg-neutral-900/40 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/20 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10">
                <h1 className="text-3xl font-bold text-center text-gray-100 mb-6 drop-shadow-sm">
                    Sign Up <span className="text-cyan-400">AuthChat</span>
                </h1>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-200">Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full input input-bordered h-10 bg-gray-800/50 text-white placeholder-gray-400 border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-200">Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="johndoe" 
                            className="w-full input input-bordered h-10 bg-gray-800/50 text-white placeholder-gray-400 border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
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
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-200">Confirm Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            className="w-full input input-bordered h-10 bg-gray-800/50 text-white placeholder-gray-400 border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    {/* GENDER CHECKBOX COMPONENT */}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                    <Link to="/login" className="text-sm text-gray-300 hover:text-cyan-400 hover:underline inline-block transition-colors">
                        Already have an account?
                    </Link>

                    <button className="btn btn-block mt-2 bg-cyan-600 hover:bg-cyan-500 text-white border-none shadow-lg shadow-cyan-500/30 transition-all duration-300">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;