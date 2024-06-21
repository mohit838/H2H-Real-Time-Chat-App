import { useState } from "react";
import toast from "react-hot-toast";

const useSignUp = () => {
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

      //   {
      //     "user": {
      //         "_id": "667568f08a06c915da8cf39f",
      //         "fullName": "Kamal Stafford",
      //         "userName": "pezyki2",
      //         "gender": "female",
      //         "profilePic": "https://avatar.iran.liara.run/public/girl?username=pezyki2",
      //         "createdAt": "2024-06-21T11:50:08.368Z",
      //         "updatedAt": "2024-06-21T11:50:08.368Z",
      //         "__v": 0
      //     }
      // }

      console.log(data);

      if (data.error) throw new Error(data.error);

      //local storage

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
