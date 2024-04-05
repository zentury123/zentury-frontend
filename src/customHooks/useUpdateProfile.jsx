import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "../components/Toaster";
import Error from "next/error";
import { useSession } from "next-auth/react";

const useUpdateProfile = () => {

  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const updateProfile = async (data) => {
    try {
      setLoading(true);
      await Axios.put("/api/auth/profile", { ...data }, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      Toast.fire({
        icon: "success",
        title: "Profil aktualizovaný",
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

  return { updateProfile, loading };
};

export default useUpdateProfile;
