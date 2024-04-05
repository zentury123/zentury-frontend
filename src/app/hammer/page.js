"use client";

import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

import React, { useEffect, useState } from "react";

export default function Hammer() {
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
          KLADIVO NA VERITEĽOV
        </p>
        <img src="/hammer1.png" alt="" className="lg:mt-[38px] mt-[25px]" />
        <div className="text-[#44525E] text-[12px] leading-[18px] mt-[40px]">
          <p>
            Ministerstvo spravodlivosti dosiaľ zaostávalo za proľudovo
            orientovaným imidžom iných rezortov patriacich pod ľavicovú vládu
            Roberta Fica. Viera Tomanová pomohla utláčaným zamestnancom a
            pripravila nový, podľa nej sociálnejší Zákonník práce.
          </p>

          <p>
            Ministerstvo hospodárstva bojuje proti zvyšovaniu cien takmer
            čohokoľvek, čo príde premiérovi na um. Šéf zdravotníctva Ivan
            Valentovič zasa zrušil dvadsaťkorunáčky za návštevu lekára. A rezort
            financií aspoň znížil DPH na knihy. Len Štefan Harabin, dirigujúci
            rezort spravodlivosti, nestíhal. Skôr než pomocou obyčajným ľuďom sa
            prezentoval bojom proti Špeciálnemu súdu či sťažovaním sa na svojho
            predchodcu Daniela Lipšica.
          </p>
          <p>
            Možno aj preto poveril podriadených vypracovaním série noviel
            zákonov, ktoré majú pomôcť sociálne slabšej či vedomostne
            zaostávajúcej skupine obyvateľov. Na mušku sa dostali tí, čo ľuďom
            poskytujú pôžičky a ťažia z ich finančnej tiesne alebo slabšej
            ekonomickej gramotnosti. Zmenené zákony, ktoré majú zabrániť
            nekalostiam pri poskytovaní úverov a pri realizácii záložných práv,
            platia od začiatku tohto roka. Či ochránia ľudí pred úžerníckymi
            praktikami pôžičkárov, je neisté. No s veľkou pravdepodobnosťou
            spôsobia problémy určitej skupine podnikateľov a ohrozia efektívnosť
            vymáhania ich práv.
          </p>
          <br />
          <p className="font-[700]">Analýza chýba</p>
          <p>
            Od prvého januára vstúpili do platnosti novely zákonov o spotrebných
            úveroch, dobrovoľných dražbách a zmeny v Občianskom zákonníku,
            týkajúce zabezpečovacieho prevodu práva. Všetky majú spoločného
            menovateľa – snahu posilniť pozíciu dlžníkov vo vzťahu k veriteľom.
            Zákon o spotrebných úveroch má ambíciu chrániť ľudí, ktorí si
            požičiavajú peniaze. Zmeny ustanovení o dobrovoľných dražbách a
            zabezpečovacom prevode práv majú zasa predovšetkým zabrániť, aby tí,
            ktorí svoje dlhy riadne nesplácajú, prišli špekulatívnym spôsobom o
            majetok.
          </p>
          <p>
            Rezort spravodlivosti nepodložil potrebu zmien žiadnou analýzou.
            Argumentuje verejne známymi praktikami na trhu s úvermi. Aj Peter
            Straka, poverený riadením sekcie legislatívy, hovorí o tragédiách,
            keď ľudia pre úver niekoľko desiatok tisíc korún prišli o byty alebo
            domy v neporovnateľne vyššej hodnote.
          </p>

          <br />
          <p className="font-[700]">Kontraproduktívne</p>
          <p>
            No podľa P. Straku sa paragrafy nenovelizovali len pre potrebu
            upraviť vzťahy medzi veriteľmi a dlžníkmi. Ale aj preto, aby sa
            odstránili medzery v legislatívne, ktoré od schválenia pôvodných
            zákonov ukázala aplikačná prax. A novinky majú tiež pomôcť
            poskytovateľom úverov a vymáhačom pohľadávok v boji s nekalou
            konkurenciou. „Išlo nám o ochranu dlžníka aj o posilnenie práv
            veriteľa, aby bol celý proces transparentný a nedal sa zneužiť,“
            tvrdí sekčný šéf ministerstva. Firmy z pôžičkového biznisu sa však
            obávajú, že nové právne predpisy budú kontraproduktívne. Serióznym
            poskytovateľom sťažia podnikanie, kým špekulanti si nájdu kľučky aj
            medzi zmenenými paragrafmi. Predseda asociácie organizácií
            splátkového predaja Stanislav Hroš dokonca naznačil, že
            poskytovatelia začnú zvažovať odchod z trhu.
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
          <p>
            Ak sa tak stane, sociálne slabším skupinám obyvateľov, ktorí
            potrebujú peniaze a nedokážu sa orientovať v ponukách poskytovateľov
            úverov, ostane podstatne menší a menej dôveryhodný okruh
            podnikateľov, od ktorých budú môcť pýtať úver. Takže napokon možno
            skončia u skutočn©ch úžerníkov, ktorí svoje podnikanie nespájajú s
            novelizovanými zákonmi.
          </p>
          <br />

          <p className="font-[700]">Celoštátna RPMN</p>
          <p>
            Boj proti legálnej úžere a tlak Európskej únie, aby členské štáty
            lepšie chránili spotrebiteľov, boli podľa P. Straku hlavnými dôvodmi
            zmien v zákone o spotrebných úveroch.
          </p>
          <p>
            Špeciálnemu režimu vyňatému zo zákona o spotrebných úveroch sa podľa
            vzoru legislatívy EÚ tešia napríklad ultra rýchlo splácané úvery. Ak
            spotrebiteľ splatí úver do troch mesiacov alebo najviac štyrmi
            splátkami maximálnej do jedného roka. Rovnako úrokové obmedzenia
            nebudú platiť ani pri požičaní menej ako 200 eur (necelých
            sedemtisíc korún) alebo nad 20-tisíc eur (necelých 700-tisíc korún).
          </p>

          <p>
            Za jednu z najdôležitejších noviniek považuje P. Straka povinnosť
            poskytovateľov pôžičiek predložiť dlžníkovi pred podpísaním zmluvy
            formulár s dvoma údajmi. Prvým je ročná percentuálna miera nákladov
            (RPMN), ktoré sú zahrnuté do práve dojednávaného úveru. Druhým zasa
            celoslovenská RPMN pre daný druh pôžičky – tú vypočíta rezort
            financií na základe informácií, ktoré musia všetci poskytovatelia
            zverejniť.
          </p>
          <p>
            „Spotrebiteľ môže obehnúť tri-štyri firmy a vybrať si najvýhodnejšiu
            ponuku,“ odporúča P. Straka. Dodáva, že ak formulár nebude súčasťou
            zmluvy o úvere, pôžička sa stáva zo zákona bezúročnou. Rovnaký osud
            ju postihne v prípade, ak súčasťou zmluvy o úvere nebude úroková
            sadzba, sankčné úroky alebo poplatky z omeškania. Takisto v nej
            musia byť podmienky predčasného splatenia úveru a následky
            vyplývajúce z nesplácania.
          </p>
          <br />

          <p className="font-[700]">Problémový strop</p>
          <p>
            Najzásadnejšou a najkontroverznejšou novinkou, ktorú priniesol nový
            zákon, je vládou stanovená maximálna cena za poskytnutie spotrebných
            úverov. Tá má predovšetkým zabrániť legálnej úžere. Je však otázne,
            či jej spolu s informačným formulárom aj reálne zabráni. Ľudia
            požičiavajúci si peniaze v takzvaných nebankovkách veľmi detailne na
            zmluvy nepozerajú. Chodia do nich po úvery hlavne preto, že pre
            banky nie sú bonitnými klientmi. Za to, že sú rizikovými zákazníkmi,
            musia teda, logicky, aj viac zaplatiť. A stanovenie úverového stropu
            im môže zahatať cestu k pôžičkám.
          </p>
          <p>
            musia teda, logicky, aj viac zaplatiť. A stanovenie úverového stropu
            im môže zahatať cestu k pôžičkám. Úverový strop prináša aj praktické
            problémy, ktoré zatiaľ neumožňujú jeho stanovenie. Napriek tomu, že
            od prvého januára by sa ním poskytovatelia pôžičiek mali riadiť.
            Kameňom úrazu je výška odplaty za spotrebné úvery. Ministerstvo
            financií koncom minulého roka priznalo, že s jej určením má problém,
            pretože slovenská legislatíva nepozná pojem odplata za úver.
            Nakoniec rezort rozhodol, že pri návrhu na jej určenie bude
            vychádzať z RPMN, za akú sa spotrebné úvery na trhu predávajú.
          </p>
          <p>
            Vláda bude potom narábať s násobkami tejto sadzby. Zatiaľ však na
            jej rokovanie z ministerstva financií neprišiel návrh na vydanie
            nariadenia určujúceho maximálny cenov. strop úverov. Ten môže podľa
            hovorcu Miroslava Šmála prísť až po prvom kvartáli tohto roka. Po
            jeho uplynutí úverové firmy zverejnia informácie o svojich RPMN a až
            potom ministerstvo vypracuje svoj návrh. Hovorca predpokladá, že
            vláda vydá nariadenie v máji.
          </p>
        </div>
      </div>

    </div>
  );
}
