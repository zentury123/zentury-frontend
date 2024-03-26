"use client";

import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function CompanyAbout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-white min-h-[100vh]">
      <TopHeader />
      <Navigation />
      <div className="lg:mt-[187px] mt-[90px] xl:px-[105px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] text-black font-semibold">
          O spoločnosti
        </p>
        <div className="text-[#44525E] text-[12px] lg:mt-[48px] mt-[25px]">
          Dražobná spoločnosť ZENTURY, s.r.o. (ďalej aj ako „Spoločnosť“) sa
          zameriava predovšetkým na realitnú činnosť a činnosť dražobníka podľa
          zákona č. 527/2002 Z.z. o dobrovoľných dražbách v znení neskorších
          predpisov. Podstatná časť tímu ZENTURY, s.r.o. uskutočňuje dobrovoľné
          dražby od roku 2023
          <br />
          <br />
          Od okamihu získania osvedčenia, oprávňujúceho Spoločnosť na výkon a
          uskutočňovanie dobrovoľných dražieb, začala Spoločnosť vykonávať
          dobrovoľné dražby pre niekoľko tak zákonných ako aj zmluvných
          záložných veriteľov, vrátane jednej z najväčších bankových inštitúcií
          pôsobiacich na území Slovenskej republiky.
          <br />
          <br />
          Naša Spoločnosť disponuje prepracovaným systémom cielenej inzercie,
          ktorá okrem štandardného uverejňovania zákazky na najnavštevovanejších
          predplatených realitných portáloch ako aj na web stránke Spoločnosti,
          zahŕňa oslovovanie konkrétnych záujemcov z databázy našej Spoločnosti.
          Súčasne sa nám osvedčila aj sekcia našej webstránky, prostredníctvom
          ktorej nás oslovujú so svojimi požiadavkami na nadobudnutie
          nehnuteľností v dobrovoľných dražbách, tzv. koneční záujemcovia.
          <br />
          <br />
          Celý proces výkonu dobrovoľných dražieb, predovšetkým však príprava
          listín a dokumentov vyžadovaných v súlade so zákonom č. 527/2002 Z.z.
          o dobrovoľných dražbách v znení neskorších predpisov je uskutočňovaný
          odbornými pracovníkmi ZENTURY, s.r.o. s ukončeným právnickým
          vzdelaním. Práve ich právnické vzdelanie, možno na rozdiel od
          ostatných dražobných spoločností, je zárukou, že celý proces výkonu
          dobrovoľnej dražby od okamihu doručenia návrhu na vykonanie dražby až
          po odovzdanie výťažku dražby bude posudzovaný omnoho extenzívnejšie s
          aspektom aj na zákonnú úpravu iných osobitných predpisov. Odbornými
          znalosťami predovšetkým však Občianskeho zákonníka, Obchodného práva a
          Civilného sporového poriadku, v konečnom dôsledku minimalizuje tím
          ZENTURY, s.r.o. vznik potencionálnych sporov v súvislosti s výkonom
          dobrovoľných dražieb.
          <br />
          <br />
          Samozrejmosťou spolupráce s našou dražobnou spoločnosťou je
          zabezpečenie výkonu dobrovoľných dražieb na celom území Slovenskej
          republiky.
          <br />
          <br />
          Naša Spoločnosť spolupracuje s notármi a súdnymi znalcami, ktorí
          prispievajú k tomu, že celý proces dobrovoľnej dražby vieme uskutočniť
          do siedmych týždňov odo dňa doručenia návrhu na vykonanie dražby. V
          rýchlejšom vykonaní dražby Nehnuteľnosti nás obmedzujú iba Zákonom
          stanovené lehoty.
          <br />
          <br />V prípade záujmu o bližšie podrobnosti ako aj Vaše otázky s Vami
          radi prediskutujeme na osobnom rokovaní. Tešíme sa na prípadnú budúcu
          spoluprácu.
        </div>
        <div className="max-w-[224px] w-[100%] p-[12px] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[20px] mt-[32px]">
          <p className="text-[24px] font-semibold leading-[28px] text-white">
            Osvedčenie
          </p>
          <p className="text-white">Otvorte si naše osvedčenie</p>
          <div className="w-[91px] h-[36px] rounded-[18px] text-white bg-[#010101] text-[13px] font-semibold flex justify-center items-center mt-[19px]">
            Stiahnuť PDF
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
