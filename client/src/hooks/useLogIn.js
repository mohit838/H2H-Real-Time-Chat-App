import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogIn = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  // Double check the error this is not necessary just for findings ways
  const handleInputErrors = ({ userName, password }) => {
    if (!userName || !password) {
      toast.error("Fill all fields!");
      return false;
    }
    return true;
  };

  const logIn = async ({ userName, password }) => {
    const success = handleInputErrors({
      userName,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/v1/h2h-auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      if (res.ok) {
        toast.success("LogIn successfully!");
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "LogIn failed!");
      }
    } catch (error) {
      toast.error(error?.message || "Error!!");
    } finally {
      setLoading(false);
    }
  };

  return { logIn, loading };
};

export default useLogIn;
