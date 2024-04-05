import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";
import Error from "next/error";

const useContact = () => {
  const [loading, setLoading] = useState(false);
  const sendContactQuery = async (data) => {
    try {
      setLoading(true);
      await Axios.post("/api/support/contact", { ...data });
      Toast.fire({
        icon: "success",
        title: "Žiadosť odoslaná",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Niečo sa pokazilo",
      });
      throw new Error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendContactQuery, loading };
};

export default useContact;
