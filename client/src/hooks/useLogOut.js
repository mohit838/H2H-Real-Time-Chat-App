import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/v1/h2h-auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      localStorage.removeItem("chat-user", null);
      setAuthUser(null);

      if (res.ok) {
        toast.success("LogOut successfully!");
      } else {
        toast.error("LogOut failed!");
      }
    } catch (error) {
      toast.error(error?.message || "Error!!");
    } finally {
      setLoading(false);
    }
  };

  return { logOut, loading };
};

export default useLogOut;
