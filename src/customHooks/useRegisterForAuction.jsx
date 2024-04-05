import React, { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";
import { useSession, signOut } from "next-auth/react";

const useRegisterForAuction = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const registerForAuction = async (data, id) => {
    try {
      setLoading(true);
      await Axios.post(
        `/api/real-estate/${id}/auction`,
        {
          ...data,
        },
        { headers: { Authorization: `Bearer ${session?.user?.accessToken}` } }
      );
      Toast.fire({
        icon: "success",
        title: "Žiadosť odoslaná",
      });
    } catch (error) {
      if (error?.request?.statusText === "Unauthorized") {
        signOut();
      }
      Toast.fire({
        icon: "error",
        title: "Niečo sa pokazilo",
      });
      //   throw new Error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerForAuction, loading };
};

export default useRegisterForAuction;
