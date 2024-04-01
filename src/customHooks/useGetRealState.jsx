import React, { useEffect, useState } from "react";
import { Axios } from "./AxiosData";
import { Toaster } from "@/components/Toaster";

const useGetRealState = (
  key = "auction",
  priceRange = 1000000,
  region = "",
  typeOfRealEstate = "",
  typeOfAuction = "",
  page = 1,
  keywords
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await Axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?page=${page}&limit=5&saleType=${key}&priceRange=0-${priceRange}&region=${region}&typeOfRealEstate=${typeOfRealEstate}&typeOfAuction=${typeOfAuction}&search=${keywords}`
        );
        setData(response?.data.result);
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
  }, [key, priceRange, region, typeOfRealEstate, typeOfAuction, page,keywords]);

  return { data, loading };
};

export default useGetRealState;
