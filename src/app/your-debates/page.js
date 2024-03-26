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
      <TopHeader />
      <Navigation />
      <div className="pb-[127px] lg:pt-[127px] mt-[90px] xl:px-[105px] px-[30px] text-black">
        <p className="lg:text-[40px] text-[25px] text-black font-[600]">
          DLHY VÁM NENARASTÚ, AK ICH VČAS UHRADÍTE
        </p>
        <img src="/dollar.png" alt="" className="lg:mt-[38px] mt-[25px]" />
        <div className="text-[#44525E] text-[12px] leading-[18px] mt-[40px]">
          <p>
            {" "}
            V súčasnosti má každý z nás veľmi málo času. Možno stíhate viac
            zamestnaní, prípadne ste v práci od rána do večera, pretože náklady
            na život nie sú malé a v čase finančnej krízy mnohí o prácu dokonca
            prichádzajú. Máte teda čo robiť, aby ste včas stihli zaplatiť
            nájomné, poplatky za energie, mobilné služby, pôžičky či iné úvery.
            Ťažkosti nastávajú vtedy, ak zabudnete niekde niečo zaplatiť.
            Napríklad ako živnostník zdravotnej poisťovni povinné zdravotné
            odvody, daňovému úradu nedoplatok na dani, Sociálnej poisťovni
            nemocenské či iné poistenie. Alebo v návale každodenných povinností
            zabudnete na poslednú faktúru od mobilného operátora či na splátku
            pôžičky v banke. Prvé problémy nenechajú na seba dlho čakať.
          </p>
          <br />
          <p className="font-[700]">Dlh preplatíte sedemnásobne</p>
          <p>
            O dlhu možno dlhší čas neviete, určite však rátajte s tým, že si vás
            jedného dňa nájde. A možno nielen vás. Podľa vyjadrení Silvie
            Bacsóovej, výkonnej riaditeľky a členky predstavenstva spoločnosti
            General Factoring, ak ste v pozícii dlžníka alebo ručiteľa a
            neuhradíte dlh počas svojho života, prechádzajú vaše dlhy dokonca aj
            na dedičov. „Pokiaľ dlžnú sumu nezaplatíte v rámci mimosúdneho
            vymáhania, môžete v prípade súdneho a exekučného vymáhania svoj
            záväzok ,preplatiť‘ v niektorých prípadoch až sedemnásobne.
            Napríklad, ak váš pôvodný záväzok predstavoval sumu 46,47 eura (1
            400 Sk), môže sa tento dlh v prípade, ak ignorujete jeho uhradenie,
            zvýšiť o úroky z omeškania, náklady súdneho a exekučného vymáhania,
            ako aj trovy právneho zastúpenia veriteľa až na sumu 328,30 eura (9
            800 Sk), ktorá je vymáhaná súdnym exekútorom.“
          </p>
          <br />
          <p className="font-[700]">Pozor na zbytočné výdavky</p>
          <p>
            Pokiaľ niekomu niečo dlhujete, v konečnom dôsledku na nezaplatených
            dlhoch každým dňom strácate. Náklady, ktoré spoločnostiam pri
            vymáhaní dlhov vzniknú, zaplatíte. Silvia Bacsóová dodáva, že okrem
            istiny sa vymáhajú úroky z omeškania a ostatné príslušenstvo, ktoré
            tvoria rôzne poplatky bánk podľa aktuálneho sadzobníka poplatkov.
            „Navyše, ak je pohľadávka vymáhaná súdnym alebo exekučným konaním,
            zvyšuje sa o trovy súdneho konania (súdne poplatky), trovy právneho
            zastúpenia (trovy advokátovi) a trovy exekúcie (odmeny exekútora a
            hotových výdavkov exekútora).“
          </p>
          <p>
            Podľa Viktórie Grossovej, výkonnej riaditeľky spoločnosti Intrum
            Justitia Slovakia, najvhodnejším spôsobom zaplatenia dlhu je pre
            dlžníka uhradiť ho ešte počas mimosúdneho konania, keď je
            odbremenený od súdnych trov, exekučných trov, prípadne trov právneho
            zastúpenia. „V záujme každého veriteľa je získať svoje peniaze čo
            najskôr. Rýchlejšia návratnosť sa dá očakávať hlavne pri nižších
            výškach pohľadávok, prípadne pri zabezpečených pohľadávkach,“
            spresňuje Grossová.
          </p>
          <br />
          <p className="font-[700]">Spôsoby vymáhania dlžnej sumy</p>
          <p>
            Firmy sa snažia vymáhať svoje pohľadávky najskôr interne, zaslaním
            upomienok, prípadne telefonátmi. Záleží od postupu, ktorý si veriteľ
            zvolí. „Je to jeho pohľadávka a jedine on sa môže rozhodnúť, akým
            spôsobom pristúpi k vymáhaniu vzniknutého dlhu. Dlžník má stále
            možnosť sa svojho dlhu zbaviť bez čakania na prvú výzvu, prípadne
            telefonát, keďže by o existencii dlhu mal vedieť. Štandardne firmy
            začínajú upomínať dlžníka po 30 dňoch omeškania, čo však nie je vždy
            pravidlom,“ hovorí Viktória Grossová.
          </p>
          <p>
            Prax je podľa Silvie Bacsóovej taká, že dlžníci sú spravidla
            upozorňovaní najskôr telefonicky, potom písomne, prípadne aj
            e-mailom a esemeskami, alebo aj osobnou návštevou. „Ak sa tieto
            upozornenia minú s účinkom, pristupuje sa k vymáhaniu pohľadávku
            prostredníctvom externej inkasnej agentúry, súdu a exekútora,
            prípadne k odpredaju pohľadávok napríklad inkasným agentúram, ktoré
            potom vymáhajú pohľadávky vo vlastnej réžii,“ dodáva Bacsóová. Pre
            veriteľov pohľadávok je táto cesta omnoho výhodnejšia, keďže
            podstatne usporia náklady spojené s ich vymáhaním. Ako ďalej tvrdí,
            najlepšie dlžník „obíde“, ak sa dohodne na vyplatení pohľadávky
            celkovo, respektíve na splátkovom kalendári v rámci mimosúdneho
            riešenia. „Čím skôr dlžník zaplatí, tým menej ho to bude stáť. V
            prípade, že veriteľ pohľadávky, prípadne inkasná agentúra, pristúpi
            k súdnemu a exekučnému vymáhaniu pohľadávky, dlžník sa zvyšovaniu
            svojho záväzku nevyhne.“
          </p>
          <br />
          <p className="font-[700]">Kedy sa dlh premlčí</p>
          <p>
            Veritelia pohľadávok si sledujú lehoty, aby sa im pohľadávky
            nepremlčali a aby svoje nároky uplatnili v zákonnej lehote.
            „Niektorí si uplatňujú svoje pohľadávky na súde v súlade s internými
            predpismi, niektorí skôr, iní neskôr. Za svoje dlhy je však
            zodpovedný dlžník, on je ten, čo používal ,cudzie peniaze‘ a on
            nesie zodpovednosť za ich úhradu veriteľovi v stanovenom čase a v
            dohodnutej výške,“ konštatuje Bacsóová. Ak si myslíte, že váš dlh
            môže byť po určitom čase premlčaný, je to naozaj tak. Netýka sa to
            však všetkých dlhov. Dôležité podľa výkonnej riaditeľky spoločnosti
            General Factoring je, akou normou sa daný právny vzťah riadi. „ﾚvery
            sa riadia Obchodným zákonníkom, kde je premlčacia lehota 4 roky od
            začiatku omeškania.
          </p>
          <p>
            V prípade, ak sa vzťah riadi Občianskym zákonníkom, je premlčacia
            lehota tri roky, avšak v oboch prípadoch sa tieto lehoty môžu
            predĺžiť, ak dlžník dlh uzná. Za uznanie sa pritom považuje
            zaplatenie čo i len časti dlhu.“ Lehota premlčania je akousi
            „ochranou“, ktorú dlžníkovi priamo poskytuje zákon. „Tejto ochrany
            sa však musí dlžník sám domáhať, keďže súdy na premlčanie z úradnej
            moci neprihliadajú,“ spresňuje Grossová. V praxi to znamená, že ak
            viete, že lehota na vymoženie dlhu uplynula, musíte o tom súd včas
            informovať.
          </p>
          <br />
          <p className="font-[700]">Spýtajte sa na možnosť dohody</p>
          <p>
            Prax ukazuje, že medzi dlžníkmi, ktorí dlhší čas neplatia, ide skôr
            o nízkopríjmové skupiny ľudí, čiže tých, čo zarábajú často len
            minimálnu mzdu, prípadne sú odkázaní na sociálne dávky. Ďalšiu
            skupinu podľa Silvie Bacsóovej tvoria špekulanti. Tí nie sú dlžníkmi
            len jedného veriteľa, ale zvyčajne sú ich záväzky viacnásobné, teda
            voči viacerým veriteľom. „Podobné praktiky sú však už v súčasnosti
            obmedzené fungovaním úverového registra bánk. Situácia s dlhmi voči
            bankám je však trochu zložitejšia. Banky zvyčajne nesúhlasia s
            odpustením pohľadávky, prípadne jej časti. Ak je však pohľadávka už
            vo vlastníctve inej spoločnosti, je možné dohodnúť sa napríklad na
            odpustení úrokov z omeškania, prípadne časti dlhu za určitých
            dohodnutých podmienok,“ spresňuje Bacsóová.
          </p>
          <p>
            Pokiaľ vám už nejaký dlh vznikol, dohodnúť sa môžete aj na ďalších
            formách úhrady. Napríklad vo forme splátkového kalendára, predĺžením
            lehoty splatnosti dlhu, znížením úrokovej sadzby pohľadávky,
            prevzatím dlhu, dočasným odložením splátok, prípadne môžete banku
            požiadať o započítanie úhrady na istinu pohľadávky, nie na úroky, v
            dôsledku čoho dochádza k rýchlejšiemu zaplateniu pohľadávky, pretože
            úroky sa počítajú zo znižujúcej sa istiny. Najmä v čase finančnej
            krízy, ak ste prišli o prácu a nemáte na splátky hypotéky či úveru,
            hneď kontaktujte banku. „Pokiaľ je banka dostatočne informovaná o
            vašej prechodnej zlej situácii, vie vám vyjsť v ústrety a
            prispôsobiť dočasne splátkový kalendár podľa vašich možností.
            Najhoršie je reagovať na pochybné ponuky rôznych ,rýchlych
            pôžičiek‘. Tie zvyčajne majú neprimerane vysoké úroky a krátke
            lehoty splatnosti, pričom neraz ručíte celým majetkom, prípadne
            nehnuteľnosťou už aj pri menších splátkach. Keď pôžičku nie ste
            schopný splácať, prípadne sa omeškáte čo len s jednou splátkou, tak
            oň okamžite prichádzate,“ varuje na záver Grossová. Koľko komu
            zaplatíte za svoje dlhy
          </p>
          <br />
          <p className="font-[700]">Zdravotná poisťovňa</p>
          <ul className="list-disc list-inside">
            <li>
              0,2-percentný poplatok z dlžnej sumy za každý deň omeškania, ak
              omeškanie zistí poisťovňa (dlhy do decembra 2004)
            </li>
            <li>
              0,1 percenta, ak ste omeškanie zistili sami (platí za dlhy na
              poistnom vzniknuté do decembra 2004)
            </li>
            <li>
              dlhy, ktoré vznikli od roku 2005 – 2,5-násobok základnej úrokovej
              sadzby Národnej banky Slovenska platnej ku dňu splatenia dlhu (po
              1. januári 2009 Európskej centrálnej banky)
            </li>
            <li>
              výška poplatku či úroku z omeškania môže prerásť výšku dlžného
              poistného, nie je ničím obmedzená
            </li>
          </ul>
          <p className="font-[700]">Sociálna poisťovňa</p>
          <ul className="list-disc list-inside">
            <li>
              penále je vo výške 0,05 percenta z dlžnej sumy za každý deň
              omeškania odo dňa splatnosti poistného do dňa úhrady
            </li>
            <li>
              výška poplatku z omeškania nemôže presiahnuť dlžnú sumu poistného
              za kontrolované obdobie
            </li>
          </ul>
          <p className="font-[700]"> Daňový úrad</p>
          <ul className="list-disc list-inside">
            <li>výška sankcie nemôže prerásť dlh daňového dlžníka</li>
            <li>
              úrok vyrubí správca za každý deň omeškania a počíta sa najdlhšie
              za 4 roky omeškania platby dane
            </li>
            <li>
              právo vybrať a vymáhať daň je premlčané po 6 rokoch po skončení
              roka, v ktorom nedoplatok vznikol zdroj Hospodárske noviny 
            </li>
          </ul>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
