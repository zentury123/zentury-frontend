"use client";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function About() {
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
      <div className="lg:mt-[180px] mt-[90px] xl:px-[105px] px-[30px]">
        <p className="lg:text-[40px] text-[25px] font-semibold text-black">
          O dražbách
        </p>
        <div className="sm:mt-[48px] mt-[20px] text-[#44525E] text-[12px]">
          <p>
            Poznáte to, obzeráte sa po novom bývaní, a aj keď presne viete čo a
            za koľko chcete kúpiť, zatiaľ ste nenašli vhodnú nehnuteľnosť. Už
            teraz máte stres z nekonečného dohadovania o podmienkach kúpnej
            zmluvy, vybavovačkách na katastri a všetci Vaši dobroprajní známi
            Vás zásobujú historkami o realitných podvodoch.
          </p>
          <br />
          <p>
            Nové bývanie sa však dá zabezpečiť aj inak ako klasickou kúpou. Keď
            sa spomenie slovo dražba, mnohých pochytí strach či nedôvera. O
            dražbe sa však stačí sa len dozvedieť viac. Dražba môže byť malou
            spoločenskou udalosťou, kde si môžete bez rizika zasúťažiť s
            ostatnými účastníkmi a otestovať si tak svoju duchaprítomnosť a
            obozretnosť.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Čo je to dobrovoľná dražba?
          </p>
          <p>
            Je to konanie presne definované a upravené zákonom – č. 527/2002
            Z.z. o dobrovoľných dražbách. Dražbu uskutočňuje na návrh vlastníka
            nehnuteľnosti alebo záložného veriteľa, napr. banky alebo iných
            inštitúcií pri nesplácaní úveru dražobník, podľa postupu uvedeného v
            zákone, ktorý trvá približne 10 týždňov.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Aké nehnuteľnosti sa objavujú v dražbách a ako sa tam dostali?
          </p>
          <p>
            Nehnuteľnosti v našej ponuke sú takmer z 90-tich% z toho dôvodu, že
            právnické alebo fyzické osoby nevedeli splácať úvery, ktoré si
            požičali od bankových inštitúcií pôsobiacich v SR, na základe
            riadnych úverových zmlúv zabezpečených záložným právom k
            nehnuteľnosti. Ostatné prípady sú buď samotný vlastníci, správcovia
            alebo iné spoločnosti vykonávajúce záložné právo.
          </p>
          <p>
            V ponuke našich dražieb môžete nájsť širokú škálu nehnuteľností od
            lacnejších bytov cez klasické rodinné domy až po exkluzívne
            apartmány alebo vily po celej republike. Dražíme ale aj pozemky,
            priemyselné areály, sklady autoservisy či družstvá a tiež hnuteľné
            veci.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Keď si vyberiem nehnuteľnosť, ktorá sa mi páči, čo mám spraviť ako
            prvé?
          </p>
          <p>
            Určite ako prvé treba kontaktovať dražobníka a informovať sa čo
            najviac o nehnuteľnosti. Naši zamestnanci Vám vedia poradiť a
            zodpovedať tiež právne otázky. Zároveň je dobré nahlásiť sa na
            obhliadky predmetu dražby pozrieť si nehnuteľnosť „na vlastné oči“.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Prečo by mala byť dražba pre mňa výhodnejšia?
          </p>
          <p>
            Rozhodujúcim faktorom pri kúpe nehnuteľnosti je cena. Nehnuteľnosti
            v dražbe bývajú cenovo výhodnejšie. Cena každej nehnuteľnosti v
            dražbe sa odvíja od ceny, ktorú stanovil znalec v aktuálnom
            znaleckom posudku. Znalci vyhotovujú posudok pre účely dražby, čo
            znamená, že cena nehnuteľnosti reflektuje práve skutočnosť, že
            nehnuteľnosť je v dražbe. Nespornou výhodou je, že dražba musí
            prebehnúť podľa zákonných pravidiel, teda záujemca sa nemusí obávať
            toho, že sa stane obeťou realitného podvodu.
          </p>

          <br />
          <p className="text-[black] font-semibold">
            Čo potrebujem, keď sa chcem zúčastniť dražby?
          </p>
          <p>
            Treba si riadne overiť termín a miesto konania dražby a prísť v
            dostatočnom časovom predstihu aby ste sa stihli zapísať do zoznamu
            účastníkov a pravdaže nezabudnúť si občiansky preukaz (resp. výpis z
            OR).
          </p>
          <p>
            Podmienkou účasti na dražbe je zloženie dražobnej zábezpeky. Výšku
            zábezpeky dražobník zverejní v oznámení o dražbe, pričom nesmie byť
            vyššia ako 30% z ceny nehnuteľnosti. Zábezpeku môžete doniesť buď
            priamo na dražbu v hotovosti, alebo napr. vložiť na účet dražobníka
            pod príslušným variabilným symbolom a doniesť potvrdenie o jej
            vložení na dražbu.
          </p>
          <br />
          <p className="text-[black] font-semibold">Ako sa draží?</p>
          <p>
            Z priebehu dražby netreba mať strach. Na každej dražbe licitátor
            oznámi čo sa bude dražiť, aká je vyvolávacia cena a poučí účastníkov
            o tom ako sa bude dražiť - čo majú účastníci robiť. Potom už
            účastníci robia jednotlivé podania, a kto urobí najvyššie, stáva sa
            vydražiteľom.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Čo sa stane po dražbe s dražobnou zábezpekou?
          </p>
          <p>
            Ak by ste nehnuteľnosť nevydražili, zábezpeku Vám dražobník ihneď po
            dražbe v celej výške vráti. Keď sa Vám teda nehnuteľnosť nepodarí
            vydražiť, nič nestrácate, naopak odchádzate bohatší o skúsenosti. Ak
            nehnuteľnosť vydražíte, zábezpeka sa započítava do celkovej ceny
            nehnuteľnosti.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Kedy sa stanem vlastníkom?
          </p>
          <p>
            Vydražiteľ sa stáva vlastníkom nehnuteľnosti po doplatení celej sumy
            dosiahnutej vydražením, a to ku dňu udelenia príklepu na dražbe.
            Dražobník vystaví potvrdenie o zaplatení, ktoré spolu s notárskou
            zápisnicou o priebehu dražby predstavuje doklady osvedčujúce Vaše
            vlastnícke právo k nehnuteľnosti. Kataster do 60 dní vykoná zmenu
            zápisu vlastníctva na Vás.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Kedy môžem nehnuteľnosť začať reálne užívať?
          </p>
          <p>
            Po vydražení a zaplatení celej sumy za nehnuteľnosť je pôvodný
            vlastník povinný odovzdať nehnuteľnosť vydražiteľovi bez zbytočného
            odkladu.
          </p>
          <p className="text-[black] font-semibold">
            Koľko ma bude celá dražba stáť?
          </p>
          <br />
          <p>
            Neplatíte žiadne sprostredkovateľské provízie, poplatky za právne
            služby, ani správne poplatky na katastri, zaplatíte iba cenu
            nehnuteľnosti.
          </p>
          <p>
            Upozorňujeme však, že podľa ust. § 29 ods. 5 Zákona o dobrovoľných
            dražbách, náklady spojené s odovzdaním a prevzatím predmetu dražby
            nesie vydražiteľ. U nás účtujeme len cestovné náhrady v zmysle
            zákona o cestovných náhradách, pričom v Bratislave je odovzdanie bez
            poplatku.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            Čo sa stane so záväzkami ktoré viazli na nehnuteľnosti? Budem musieť
            niečo doplácať za pôvodného vlastníka?
          </p>
          <p>
            V prípade, ak bol navrhovateľ dražby prednostný záložný veriteľ,
            všetky záväzky odpadajú a nadobúdate „čistý“ list vlastníctva. Nový
            vlastník za toho pôvodného nič nedopláca.
          </p>
          <p>
            Potrebujete vedieť ešte niečo viac? Neváhajte a kontaktujte nás.
          </p>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
