import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const { loading, signUp } = useSignUp();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    gender: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.fullName) newErrors.fullName = "Fullname is required";
    if (!formData.userName) newErrors.userName = "Username is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    await signUp(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black/90 bg-clip-padding">
        <h1 className="text-3xl font-semibold text-center">
          H<span className="rotate-logo">2</span>H - SignUp
        </h1>

        {/* Sign Up form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname:</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter fullName"
              className="w-full input input-bordered h-10"
              autoComplete="off"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter userName"
              className="w-full input input-bordered h-10"
              autoComplete="off"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName}</p>
            )}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Gender:</span>
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <span className="ml-2">Male</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
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

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password:</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              autoComplete="off"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="mt-2">
            <Link to="/login">{"Have an account? LogIn"}</Link>
          </div>

          <div>
            <button
              type="submit"
              disabled={
                loading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                )
              }
              className="btn btn-block btn-sm mt-5"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
