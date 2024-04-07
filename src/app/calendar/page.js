
import React from "react";


import CalendarComp from './(calender)/index'
import { Axios } from "@/customHooks/AxiosData";


const CalendarPage = async () => {


  const response = await Axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?page=1&limit=200&saleType=auction&priceRange=0-999999999`
  );
  console.log(response.data.result)

  const data = response.data.result.map(aut=>{
    return({
      _id:aut._id,
      slug:aut.slug,

      title:aut.title,
      start:new Date(aut.dateOfAuction),
      end:new Date(aut.dateOfAuction)

    })
  })
console.log(data)
  return (
    <div className="bg-[white] min-h-[100vh]">

      <div className="lg:mt-[200px] mt-[90px] xl:px-[75px] px-[24px]">
        <p className="text-black font-semibold lg:text-[40px] text-[25px]">
          Dražobný kalendár
        </p>
        <div className="overflow-scroll">
          <div
            className="!text-white lg:mt-[52px] mt-[20px] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] min-w-[1200px]"
            style={{ height: 500 }}
          >
            <CalendarComp auctions={data} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CalendarPage;
