import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  // Double check the error this is not necessary just for findings ways
  const handleInputErrors = ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Password didn't match!");
      return false;
    }
    if (!fullName || !userName || !gender || !password || !confirmPassword) {
      toast.error("Fill all fields!");
      return false;
    }
    return true;
  };

  const signUp = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/v1/h2h-auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      if (res.ok) {
        toast.success("Signup successfully!");
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Signup failed!");
      }
    } catch (error) {
      toast.error(error?.message || "Error!!");
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

export default useSignUp;
