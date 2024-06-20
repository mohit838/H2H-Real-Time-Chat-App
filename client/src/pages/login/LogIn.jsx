import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../hooks/useSignUp";

const LogIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    
    await signUp(formData)
   
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black/90 bg-clip-padding">
        <h1 className="text-3xl font-semibold text-center">
          H<span className="rotate-logo">2</span>H - LogIn
        </h1>

        {/* LogIn form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              autoComplete="off"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password:</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="mt-2">
            <Link to="/signup">{"Don't have an account? SignUp"}</Link>
          </div>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-5">
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
