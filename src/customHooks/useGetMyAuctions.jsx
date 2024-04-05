import { useEffect, useState } from "react";
import { Axios } from "./AxiosData";
import Error from "next/error";
import { useSession } from "next-auth/react";

const useGetMyAuctions = (page) => {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [data, setData] = useState({});
  const [pagination, setPagination] = useState({
    pages: 0,
    count: 0,
    page: 1,
  });


  useEffect(() => {
    if (session?.user) {
      const getAuctions = async () => {
        try {
          setLoading(true);
          const res = await Axios.get(`/api/real-estate/user/auctions?page=${page}&limit=10`, {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          });

          setData(res?.data?.result);
          setPagination({ page: res.data?.page, pages: res.data?.pages, count: res.data?.count })
        } catch (error) {
          throw new Error(error?.res?.data?.message);
        } finally {
          setLoading(false);
        }
      };
      getAuctions();
    }
  }, [session, page])

  return { data, pagination: pagination, loading };
};

export default useGetMyAuctions;
