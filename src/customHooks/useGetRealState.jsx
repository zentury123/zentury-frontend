import React, { useEffect, useState } from "react";
import { Axios } from "./AxiosData";
import { Toaster } from "@/components/Toaster";

const useGetRealState = (
  key = "",
  priceRange = 1000000,
  region = null,
  typeOfRealEstate = null,
  typeOfAuction = null,
  page = 1
) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?page=${page}&limit=5&saleType=${key}&priceRange=0-${priceRange}&${region}&typeOfRealEstate=${typeOfRealEstate}&typeOfAuction=${typeOfAuction}`
        );
        setData(response?.data);
        console.log(response?.data?.result);
      } catch (e) {
        Toaster.fire({
          icon: "error",
          title: "Niečo sa pokazilo",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useGetRealState;
