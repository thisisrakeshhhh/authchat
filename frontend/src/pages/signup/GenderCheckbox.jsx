const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className="flex space-x-4 mt-2 mb-2">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer flex items-center justify-center p-2 rounded-lg hover:bg-gray-800/40 transition-colors ${selectedGender === "male" ? "bg-cyan-500/20" : ""}`}>
                    <span className="label-text text-gray-200">Male</span>
                    <input 
                        type="radio" 
                        name="gender" 
                        className="radio radio-info border-gray-500 scale-90" 
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer flex items-center justify-center p-2 rounded-lg hover:bg-gray-800/40 transition-colors ${selectedGender === "female" ? "bg-cyan-500/20" : ""}`}>
                    <span className="label-text text-gray-200">Female</span>
                    <input 
                        type="radio" 
                        name="gender" 
                        className="radio radio-info border-gray-500 scale-90" 
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
