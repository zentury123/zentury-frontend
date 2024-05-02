import { useEffect, useState } from "react";

const useGetSingleRealState = (realStateSlug) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/${realStateSlug}`,
          {
            next: { revalidate: 30 }, // Revalidate every hour
          }
        );

        if (!res.ok) {
          // Handle error (e.g., activate an error boundary)
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result?.result);
      } catch (e) {
        // Handle error (e.g., show a toast message)
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [realStateSlug]);

  return { data, loading };
};

export default useGetSingleRealState;
