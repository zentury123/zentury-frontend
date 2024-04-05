import { useEffect, useState } from "react";
import { Axios } from "./AxiosData";
import Error from "next/error";
import { useSession } from "next-auth/react";

const useGetProfile = () => {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [data, setData] = useState({});


  useEffect(() => {
    if (session?.user) {
      console.log(session)
      const getProfile = async () => {
        try {
          setLoading(true);
          const res = await Axios.get("/api/auth/check", {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          });

          setData(res.data?.result)
        } catch (error) {
          throw new Error(error?.response?.data?.message);
        } finally {
          setLoading(false);
        }
      };
      getProfile();
    }
  }, [session])

  return { data, loading };
};

export default useGetProfile;
