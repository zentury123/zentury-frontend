"use client";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function Povinnosti() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-white min-h-[100vh] ">
      <TopHeader />
      <Navigation />
      <div className="pb-[127px] lg:pt-[127px] mt-[90px] xl:px-[105px] px-[30px] text-black">
        <p className="lg:text-[40px] text-[25px] text-black font-[600]">
          Informácie pre dlžníkov
        </p>

        <p className="lg:mt-[38px] mt-[25px]">
          Občas sa stane, že človek prehliadne nejaký účet alebo zabudne
          vyplatiť šek, ktorý nosí celé dni so sebou. Niekedy sa môže stať, že
          práve niet dosť peňazí na vyplatenie všetkých podlžností.
        </p>
        <br />
        <p className="font-semibold">To sa môže stať každému!</p>
        <p>
          My to chápeme a sme tu preto, aby sme vám pomohli dať veci do
          poriadku. Ak ste od nás dostali list, SMS správu, e-mail prípadne máte
          zmeškaný hovor, neváhajte, nečakajte a ozvite sa nám čo najskôr. Bez
          ohľadu na to, či ste sa stali dlžníkom nedopatrením, alebo vám
          momentállne chýbajú peniaze, zachovajte chladnú hlavu. Ešte je čas
          vyhnúť sa ozajstným problémom. Ozvite sa nám a spolu nájdeme riešenie.
        </p>
        <br />
        <p className="font-semibold">
          Sme tu pre vás každý pracovný deň od 8:00 do 17:00 hod.
        </p>
      </div>
      <Footer />
    </div>
  );
}
