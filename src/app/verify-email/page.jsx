
import React from 'react'
import { APIPrefix } from '@/api'
import axios from 'axios'

export default async function VerifyEmail({ searchParams }) {

  const res = await axios.get(`${APIPrefix}/auth/verify?code=${searchParams.code}`)


  return (
    <div className=' flex justify-center items-center h-[500px]'>
      <h1 className=' md:block font-oswald text-primary  text-[26px] lg:text-[50px] font-bold'>Your Account Has Been Created Successfully.</h1>
    </div>
  )
}
