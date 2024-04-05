import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const registerUser = async (userData) => {
    try {
      setLoading(true);
      const response = await Axios.post("/api/auth/register", userData);
      Toast.fire({
        icon: "success",
        title: "Heslo bolo obnovené",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Niečo sa pokazilo",
      });
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading };
};

export default useRegisterUser;
