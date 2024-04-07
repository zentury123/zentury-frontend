
import React from 'react'
import { Axios } from "../../customHooks/AxiosData";



export default async function VerifyEmail({ searchParams }) {

  const res = await Axios.get(`/api/auth/verify?code=${searchParams.verifyCode}`)


  return (
    <>
      <div className=' flex justify-center items-center h-[500px]'>
        <h1 className=' block text-center text-[#D3A86B]  text-[26px] lg:text-[50px] font-bold'>váš účet bol úspešne vytvorený.
</h1>
      </div>

    </>
  )
}
