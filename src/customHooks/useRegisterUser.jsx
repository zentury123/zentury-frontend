import { useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "@/components/Toaster";
import { useRouter } from "next/navigation";

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const registerUser = (userData) => {
    try {
      setLoading(true);
      const response = Axios.post("/api/auth/register", userData);
      Toast.fire({
        icon: "success",
        title: "Gratulujem k registrácii,Skontrolujte si overovací email",
      });
      router.push("/");
    } catch (error) {
      //   console.log(error);
      //   if (error.message === "Unauthorized") {
      //     signOut(); // Clear the session
      //   }
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
