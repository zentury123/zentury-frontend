
import React from 'react'
import { Axios } from "../../customHooks/AxiosData";
import Link from 'next/link';
import LoginButton from '../../components/navigation/LoginButton';



export default async function VerifyEmail({ searchParams }) {

  await Axios.get(`/api/auth/verify?code=${searchParams.verifyCode}`)


  return (
    <>
      <div className=' flex justify-center items-center h-[500px] flex-col'>
        <h1 className=' block text-center text-[#D3A86B]  text-[26px] lg:text-[50px] font-bold'>Váš účet bol úspešne vytvorený.
        </h1>
    <LoginButton />
      </div>


    </>
  )
}
