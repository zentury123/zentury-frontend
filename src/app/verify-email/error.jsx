"use client"
import React from 'react'
import ContactUs from '@/components/contact-us';
import Footer from '@/components/footer';
import TopHeader from '@/components/topHeader/page';
import Navigation from "@/components/navigation/page";

function Error() {
  return (
    <>
      <TopHeader />
      <Navigation />
      <div className=' flex justify-center items-center h-[500px] mt-[89px]'>
        <h1 className=' text-center text-[#D3A86B] text-[40px] lg:text-[50px] font-bold'>Error while verify your account</h1>
      </div>y
      <div className="mt-[89px]">
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Error