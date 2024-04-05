"use client";

import React from "react";
import useGetProfile from "@/customHooks/useGetProfile";
import useUpdateProfile from "@/customHooks/useUpdateProfile";
import Spinner from "@/components/Spinner";


export default function MyAccount() {
  const { data, loading } = useGetProfile();

  const { updateProfile, loading: updateLoading } = useUpdateProfile();



  const [formData, setFormData] = React.useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await updateProfile(formData);
  }

  React.useEffect(() => {
    console.log(data)
    if (data) {
      setFormData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone
      })
    }
  }, [data])

  if (loading) {
    return (<div className="flex items-center justify-center h-[70vh]">
      <Spinner />
    </div>)
  }

  return (
    <div className="bg-white min-h-[100vh]">

      <div className="lg:mt-[200px] mt-[90px] text-black px-[24px]">
        <p className="lg:text-[40px] text-[24px] font-[600] text-center ">
          Môj účet
        </p>
        <p className="text-[12px] text-[#44525E] mt-[21px] leading-[18px] text-center">
          V tejto časti uvidíte všetky údaje vášho účtu
        </p>
        <form onSubmit={handleSubmit} className="lg:px-[115px] px-[30px] py-[57px] border border-[#C7D5E1] rounded-[29px] max-w-[788px] sm:mt-[91px] mt-[55px] m-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <p className="text-[18px] font-semibold">Meno</p>
              <input
                onChange={handleChange}
                required={true}
                value={formData.firstName}
                type="text"
                name="firstName"
                placeholder="Vaše meno"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Priezvisko</p>
              <input
                name="lastName"
                onChange={handleChange}
                required={true}
                value={formData.lastName}
                type="text"
                placeholder="Vaše priezvisko"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-[33px]">
            <div>
              <p className="text-[18px] font-semibold">Email</p>
              <input
                name="email"
                onChange={handleChange}
                required={true}
                value={formData.email}
                type="email"
                placeholder="váš@email.com"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Telefón</p>
              <input
                name="phone"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.phone}
                placeholder="+421"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
          </div>
          <button disabled={updateLoading} type="submit" className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[162px] h-[44px] rounded-[13px] text-white  mt-[46px] sm:hidden flex  justify-center items-center">
            <p className="font-semibold ml-[10px] text-[12px] text-white">
              {updateLoading ? "Načítava..." : "Zmena údajov"}
            </p>
          </button>
          <button disabled={updateLoading} type="submit" className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[162px] h-[44px] rounded-[13px] text-white m-auto mt-[46px] sm:flex hidden justify-center items-center">
            <p className="font-semibold ml-[10px] text-[12px] text-white">
              {updateLoading ? "Načítava..." : "Zmena údajov"}
            </p>
          </button>
        </form>
      </div>

    </div>
  );
}
