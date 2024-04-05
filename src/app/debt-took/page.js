"use client";

import ContactUs from "@/components/contact-us";
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

      <div className="pb-[127px] lg:pt-[127px] mt-[90px] xl:px-[105px] px-[30px] text-black">
        <p className="lg:text-[40px] text-[25px] text-black font-[600]">
          DLHY ZOBRALI SLOVÁKOM TISÍCKY BYTOV
        </p>
        <img src="/home2.png" alt="" className="lg:mt-[38px] mt-[25px]" />
        <div className="text-[#44525E] text-[12px] leading-[18px] mt-[40px]">
          <p className="font-[700]">
            Každý deň skončí v dražbe takmer 11 bytov či domov. Problémom sú
            dlhy aj nezamestnanosť.
          </p>
          <p>
            Hypotekárna pasca dobieha čoraz viac ľudí. Počet dobrovoľných
            dražieb, ku ktorým neúspešní sporitelia pristupujú, láme historické
            rekordy. „Počet nami realizovaných dražieb v minulom roku narástol o
            52 percent,“ hovorí o trende vyhlasovania dražieb na nehnuteľnosti
            riaditeľka firmy Platiť sa oplatí Katarína Krajíčková. Bankoví
            klienti často preceňujú svoju schopnosť úver splatiť.
          </p>
          <br />
          <p className="font-[700]">Dražia sa najmä byty</p>
          <p>
            Postav dom, zasaď strom. Týmto heslom sa riadia najmä mladí Slováci.
            Na kúpu vlastného bývania nemajú a tak si v bankách berú hypotekárne
            úvery. Často si neuvedomujú dlhodobosť záväzku a po čase od svojich
            plánov ustupujú. Svoj vysnený byt, či dom sú nútení predať.
          </p>
          <br />
          <p>
            „Dražby bytov, ktoré sme realizovali, stúpli až o 78 percent. Aj pri
            rodinných domoch je zreteľný nárast oproti roku 2011 – 25 percent,“
            pokračuje Krajíčková. Podľa štatistík Notárskej komory Slovenskej
            republiky došlo k celkovému medziročnému nárastu dobrovoľných
            dražieb o takmer 20 percent. Dražilo sa 3 916 nehnuteľností.
            Najväčšie problémy majú najmä južné oblasti Slovenska a regióny s
            vysokou nezamestnanosťou.
          </p>
          <br />
          <p className="font-[700]">Predaj pod cenu</p>
          <p>
            Dražobná spoločnosť nehnuteľnosť predá, čím veriteľom vyplatí dlžnú
            čiastku. Nového majiteľa poteší výhodnosť takejto transakcie. „Cena
            dosiahnutá vydražením je v priemere 86 percent všeobecnej hodnoty
            predmetu dražby,“ potvrdzuje Katarína Krajíčková. Nárast počtu
            dražieb zaznamenala aj spoločnosť Dražobník. „Medziročne je to 27
            percent. Zvýšený počet sme zaznamenali najmä pri nehnuteľnostiach
            určených na bývanie. Pri podnikateľských subjektoch nebol až taký
            dramatický, avšak stúpala hodnota dražieb. Krachovali teda väčšie
            úvery,“ hovorí konateľ Michal Sedlačko. Podľa neho bolo možné nárast
            predpokladať. „Vnímam to ako dobiehanie krízy, ktorú sa v prvých
            rokoch darilo oddialiť,“ myslí si Sedlačko.
          </p>
          <br />
          <p>
            Jeden z hypotekárnych lídrov na trhu VÚB poskytol v roku 2012
            približne desaťtisíc hypotekárnych úverov v celkovej hodnote 500
            miliónov eur. Peniaze potrebovali najmä mladí ľudia. „Významnú časť
            hypoték tvorili dotované úvery pre mladých, ktoré sa na celkovej
            produkcii podieľali 37 percentami. Účelové úvery na bývanie
            predstavujú 54 percent všetkých poskytovaných úverov,“ potvrdzuje
            Alena Walterová, hovorkyňa VÚB.
          </p>
          <br />

          <p>
            Napriek nárastu počtu dražieb hovorí o tom, že zlyhané hypotéky
            predstavujú stabilne malú časť týchto produktov. „V drvivej väčšine
            ide o situácie, kedy dlžníkom poklesol príjem, alebo ho úplne
            stratili,“ vysvetľuje Walterová. Podľa štatistík NBS predstavujú
            zlyhané úvery domácností asi štyri percentá z celkovej sumy.
          </p>
          <br />
          <p>
            Napríklad Prvá Stavebná Sporiteľňa eviduje 23 400 úverov ručených
            nehnuteľnosťou v celkovej hodnote takmer 580 miliónov eur. Tomu, aby
            sa ručiteľská nehnuteľnosť dostala do dražby, sa však snažia skôr
            zabrániť. „Máme záujem dohodnúť sa s klientmi a pomôcť im aj v
            prípade, ak v ich živote nastanú nepredvídateľné finančné problémy a
            nie sú schopní svoje záväzky splácať,“ hovorí manažér PSS Radovan
            Slobodník. Potvrdzuje, že medzi najčastejšie problémy patria strata
            zamestnania, znížený príjem, či dlhodobá PN.
          </p>
        </div>
      </div>

    </div>
  );
}
