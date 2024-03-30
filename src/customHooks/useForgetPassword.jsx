import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";
import Error from "next/error";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const sendVerificationEmail = async (email) => {
    try {
      setLoading(true);
      const response = await Axios.post("/api/auth/forget-password", { email });
      Toast.fire({
        icon: "success",
        title: "overovací kód odoslaný na vašu email adresu",
      });
    } catch (error) {
      console.log(email);
      Toast.fire({
        icon: "error",
        title: "Niečo sa pokazilo",
      });
      throw new Error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendVerificationEmail, loading };
};

export default useForgotPassword;
