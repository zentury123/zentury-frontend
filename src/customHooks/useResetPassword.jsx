import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";
import Error from "next/error";

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const resetUserPassword = async (code, newPassword, confirmNewPassword) => {
    try {
      setLoading(true);
      const response = await Axios.post("/api/auth/reset-password", {
        code,
        newPassword,
        confirmNewPassword,
      });
      Toast.fire({
        icon: "success",
        title: "overovací kód odoslaný na vašu email adresu",
      });
    } catch (error) {
      console.log(code + " " + newPassword + " " + confirmNewPassword);
      Toast.fire({
        icon: "error",
        title: "Niečo sa pokazilo",
      });
      throw new Error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { resetUserPassword, loading };
};

export default useResetPassword;
