import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";
import Error from "next/error";

const useDirectSaleContact = () => {
  const [loading, setLoading] = useState(false);
  const contactDirectSale = async (data) => {
    const { firstName, lastName, email, phone, message, id } = data;
    try {
      setLoading(true);
      await Axios.post(`/api/real-estate/${id}/contact`, {
        firstName,
        lastName,
        email,
        phone,
        message,
      });
      Toast.fire({
        icon: "success",
        title: "Žiadosť odoslaná",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Niečo sa pokazilo",
      });
      //   throw new Error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { contactDirectSale, loading };
};

export default useDirectSaleContact;
