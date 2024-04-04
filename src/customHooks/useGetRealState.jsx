import React, { useEffect, useState } from "react";
import { Axios } from "./AxiosData";
import { Toast } from "@/components/Toaster";

const useGetRealState = (
  key,
  priceRange = 1000000,
  region = "",
  typeOfRealEstate = "",
  typeOfAuction = "",
  page = 1,
  keywords
) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    pages: 0,
    count: 0,
    page: 1,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await Axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?page=${page}&limit=10&saleType=${key}&priceRange=0-${priceRange}&region=${region}&typeOfRealEstate=${typeOfRealEstate}&typeOfAuction=${typeOfAuction}&search=${keywords}`
        );
        setData(response?.data.result);
        setPagination({ page: response.data.page, pages: response.data.pages, count: response.data.count })
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "Niečo sa pokazilo",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [

    key,
    priceRange,
    region,
    typeOfRealEstate,
    typeOfAuction,
    page,
    keywords,
  ]);
console.log(pagination)
  return { data, pagination:pagination, loading };
};

export default useGetRealState;
