
import React from 'react'
import { Axios } from "../../customHooks/AxiosData";
import ContactUs from '@/components/contact-us';
import Footer from '@/components/footer';
import TopHeader from '@/components/topHeader/page';
import Navigation from "@/components/navigation/page";



export default async function VerifyEmail({ searchParams }) {

  const res = await Axios.get(`/api/auth/verify?code=${searchParams.verifyCode}`)


  return (
    <>
      <TopHeader />
      <Navigation />
      <div className=' flex justify-center items-center h-[500px]'>
        <h1 className=' block text-center text-[#D3A86B]  text-[26px] lg:text-[50px] font-bold'>Your Account Has Been Created Successfully.</h1>
      </div>
      <div className="mt-[89px]">
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}
