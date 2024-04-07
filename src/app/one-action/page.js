"use client";
import React from "react";

export default function OneAction() {
  return (
    <div className="bg-white min-h-[100vh]">
      <div className="lg:mt-[190px] mt-[90px] text-black xl:px-[81px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px]">
          Názov nehnuteľnosti v dražbe
        </p>
        <div className=" m-auto border border-[#C7D5E1] rounded-[36px] lg:px-[114px] px-[30px] py-[50px] mt-[33px]">
          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-[100px] gap-[30px]">
            <div className="w-[100%]">
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Dražba:</p>
                <p className="text-[#44525E] text-[12px]">Opakovaná</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Dátum dražby:</p>
                <p className="text-[#44525E] text-[12px]">23.02.2024 16:30</p>
              </div>
              <div className="flex justify-between  pb-3 border-b border-[#C7D5E1]  mt-[13px]">
                <p className="text-[13px] font-semibold w-[150px]">
                  Miesto dražby:
                </p>
                <p className="text-[#44525E] text-[12px] text-end">
                Piaristická 1, 949 01 Nitra
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Prvá obhliadka:</p>
                <p className="text-[#44525E] text-[12px]">06.02.2024 10:00</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Druhá obhliadka:</p>
                <p className="text-[#44525E] text-[12px]">15.02.2024 10:00</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Najnižšie podanie:</p>
                <p className="text-[#44525E] text-[12px]">46 250 €</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">
                  Minimálne prihodenie:
                </p>
                <p className="text-[#44525E] text-[12px]">400 €</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">
                  Cena zistená znaleckým posudkom:
                </p>
                <p className="text-[#44525E] text-[12px]">92 500 €</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Dražobná zábezpeka:</p>
                <p className="text-[#44525E] text-[12px]">10 000 €</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Okres:</p>
                <p className="text-[#44525E] text-[12px]">Brezno</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Obec:</p>
                <p className="text-[#44525E] text-[12px]">Šumiac</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Katastrálne územie:</p>
                <p className="text-[#44525E] text-[12px]">Šumiac</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Ulica:</p>
                <p className="text-[#44525E] text-[12px]">Jána Bottu 124</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div
              // onClick={() => router.push("/registration")}
              className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[308px] h-[44px] rounded-full flex justify-center items-center  mt-[30px]"
            >
              <p className="font-semibold text-[12px] ml-[10px]">
                Chcem sa zaregistrovať na dražbu
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-[58px] lg:gap-10 gap-5">
          <div className="xl:col-span-4 lg:col-span-5 md:col-span-6 col-span-12 md:block hidden ">
            <img src="/home3.png" alt="" className="w-[100%]" />
            <div className="flex justify-between mt-[18px]">
              <img src="/home4.png" alt="" />
              <img src="/home5.png" alt="" />
              <img src="/home4.png" alt="" />
            </div>
            <img src="/Map1.png" alt="" className="mt-10" />
            <div>
              <p className="text-[21px] font-semibold mt-[58px]">
                Dokumenty na stiahnutie
              </p>
              <p className="text-[#44525E] text-[12px] mt-[20px]">
                Oznámenie o dražbe.pdf
              </p>
              <p className="text-[#44525E] text-[12px]">Znalecký posudok.pdf</p>
            </div>
          </div>
          <div className="xl:col-span-8 lg:col-span-7 md:col-span-6 col-span-12 text-[17px] text-[#44525E] leading-[22px]">
            <p className="font-semibold text-black">Predmet dražby</p>
            <p className="">
              Nehnuteľnosti, v podiele 1/1, nachádzajúce sa v okrese: Žilina,
              obec: Žilina, katastrálne územie: Zádubnie, zapísané v evidencii
              Okresného úradu Žilina, katastrálny odbor, na liste vlastníctva č.
              861, a to konkrétne:
            </p>
            <div className="flex ml-2 items-center">
              <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
              <p className="ml-2">
                rodinný dom so súpisným číslom 185 s príslušenstvom, postavený
                na pozemku parc. reg. „C“ č. 694/1 o výmere 163 m2, druh
                pozemku: zastavaná plocha a nádvorie,
              </p>
            </div>
            <div className="flex ml-2 items-center">
              <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
              <p className="ml-2">
                pozemok parc. reg. „C“ č. 694/1 o výmere 163 m2, druh pozemku:
                zastavaná plocha a nádvorie,
              </p>
            </div>
            <div className="flex ml-2 items-center">
              <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
              <p className="ml-2">
                pozemok parc. reg. „C“ č. 694/2 o výmere 47 m2, druh pozemku:
                záhrada,
              </p>
            </div>
            <div className="flex ml-2 items-center">
              <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
              <p className="ml-2">
                pozemok parc. reg. „C“ č. 697/1 o výmere 346 m2, druh pozemku:
                zastavaná plocha a nádvorie,
              </p>
            </div>
            <div className="flex ml-2 items-center">
              <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
              <p className="ml-2">
                pozemok parc. reg. „C“ č. 697/2 o výmere 91 m2, druh pozemku:
                záhrada (ďalej len ako „predmet dražby“).
              </p>
            </div>
            <br />
            <p className="font-semibold text-black">Opis predmetu dražby</p>
            <p className="">
              Rodinný dom súpisné číslo 185, kat. územie Zádubnie
            </p>
            <p className="">
              Predmetom dražby je samostatne stojaci podpivničený rodinný dom s
              jedným nadzemným podlažím a obytným podkrovím. Dom je situovaný v
              zástavbe rodinných domov na Zádubanskej ulici na mierne svahovitom
              pozemku. Prístup k domu je z verejnej miestnej komunikácie pred
              domom. V blízkosti predmetu dražby sa nachádza základná občianska
              vybavenosť, vo väčšej vzdialenosti aj vybavenosť zodpovedajúca
              krajskému mestu. Lokalita, v ktorej sa predmet dražby nachádza je
              od centra mesta vzdialená cca 3 km. Dom bol daný do užívania v
              roku 1969. V roku 1992 boli vyhotovené rozvody plynu a plynové
              kúrenie. V roku 2005 boli vyhotovené plávajúce podlahy, keramické
              dlažby a kuchynská linka na 1.NP. Fasáda domu bola zateplená a
              boli vyhotovené vonkajšie omietky. V roku 2006 boli osadené
              plastové okná na nadzemných podlažiach. V roku 2007 bolo zobytnené
              podkrovné podlažie, vyhotovené vnútorné rozvody, vnútorné omietky,
              keramické obklady, plávajúce podlahy a osadené nové vnútorné
              vybavenie kuchyne a oboch kúpeľní.
            </p>
            <br />
            <p className="font-semibold text-black">Dispozičné riešenie:</p>
            <p className="">
              1.PP: tri miestnosti, vstupný priestor (kuchyňa), chodba, kúpeľňa
              s WC, schodisko a sklad pod schodiskom.
            </p>
            <p className="">Zastavaná plocha 1.PP je 113,22 m2.</p>
            <p>
              1.NP: zádverie, chodba, kuchyňa, kúpeľňa s WC, špajza, schodisko a
              tri obytné miestnosti.
            </p>
            <p>Zastavaná plocha 1.NP je 113,22 m2.</p>
            <p>2.NP: chodba, kúpeľňa, WC, kuchyňa a dve obytné miestnosti.</p>
            <p>Zastavaná plocha 2.NP je 98,70 m2.</p>
            <br />
            <p className="font-semibold text-black">
              Technicko - konštrukčné riešenie:
            </p>
            <p>
              Rodinný dom je osadený v mierne svahovitom teréne v priemernej
              hĺbke do 2,0 m od upraveného terénu. Založený je na betónových
              základoch s izoláciou. Obvodové steny 1.PP v časti pod upraveným
              terénom sú z monolitického betónu a nad upraveným terénom sú
              murované zo škvárobetónových tvárnic a tehál hr. do 40 cm. Tri
              obvodové steny sú dodatočne zateplené kontaktným zatepľovacím
              systémom s vyhotovenými vonkajšími omietkami na báze umelých hmôt.
              Na nezateplenej stene je vyhotovená brizolitová omietka so soklom
              z marmolitu. Vnútorné nosné murivo a deliace priečky sú murované.
              Vodorovné nosné konštrukcie - stropy sú železobetónové s rovným
              podhľadom. Dom je zastrešený kombináciou plochej a sedlovej
              strechy. Krytinu na plochej streche tvoria natavované pásy, na
              sedlovej streche je krytina z pozinkovaného plechu. Klampiarske
              konštrukcie a vonkajšie parapety sú z pozinkovaného plechu.
              Schodisko je dvojramenné železobetónové s úpravou stupňov z
              linolea (z 1.PP na 1.NP) a laminátovej podlahy. Úpravu vnútorných
              povrchov tvorí vápennocementová omietka a keramický obklad. Okná
              sú plastové s izolačným dvojsklom a interiérovými žalúziami. Dvere
              sú prevažne na báze dreva, osadené v oceľových zárubniach. V
              kuchyni na 1.NP je kuchynská linka na báze dreva s nerezovým
              drezom a digestorom, v kuchyni na 2.NP je kuchynská linka z
              materiálov na báze dreva so vstavanými spotrebičmi - elektrickou
              rúrou, sklokeramickou varnou doskou, digestorom a nerezovým
              drezom. V kúpeľni na 1.PP je vaňa a keramická WC misa so zadným
              splachovaním. V kúpeľni na 1.NP je keramické umývadlo osadené v
              skrinke, samostatná sprcha a keramická WC misa so zadným
              splachovaním. V kúpeľni na 2.NP je rohová vaňa a keramické
              umývadlo, vo WC je keramická WC misa so zadným splachovaním a
              umývadlo. V dome sú rozvody teplej a studenej vody z centrálneho
              zdroja (plynový kondenzačný kotol), kanalizácie, plynu a
              elektroinštalácie. Splašková kanalizácia je odvedená do žumpy.
              Elektrická sieť je svetelná aj motorická.
            </p>
            <br />
            <p className="font-semibold text-black">
              Príslušenstvo predmetu dražby tvorí najmä:
            </p>
            <p>Hospodárska budova</p>
            <p>
              Ide o jednopodlažný murovaný objekt hospodárskej budovy postavený
              za rodinným domom na pozemku parc. č. 694/1. Budova nemá súpisné
              číslo a nie je zakreslená v katastrálnej mape. Slúži na
              skladovacie účely a ako chliev a kurín. Bola daná do užívania v
              roku 1986.
            </p>
            <p>Zastavaná plocha hospodárskej budovy je 36,4 m2.</p>
            <p>Predmet dražby sa celkovo nachádza v dobrom stave.</p>
            {/* <div
              onClick={() => router.push("/registration")}
              className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[308px] h-[44px] rounded-full flex justify-center items-center  mt-[25px]"
            >
              <p className="font-semibold text-[12px] ml-[10px]">
                Chcem sa zaregistrovať na dražbu
              </p>
            </div> */}
          </div>
          <div className="xl:col-span-4 lg:col-span-5 md:col-span-6 col-span-12 md:hidden ">
            <img src="/home3.png" alt="" className="w-[100%]" />
            <div className="flex justify-between mt-[18px]">
              <img
                src="/home4.png"
                alt=""
                className="sm:w-auto sm:h-auto w-[90px] h-[75px]"
              />
              <img
                src="/home5.png"
                alt=""
                className="sm:w-auto sm:h-auto w-[124px] h-[75px]"
              />
              <img
                src="/home4.png"
                alt=""
                className="sm:w-auto sm:h-auto w-[91px] h-[75px]"
              />
            </div>
            <img src="/Map1.png" alt="" className="mt-10" />
            <div>
              <p className="text-[21px] font-semibold mt-[58px]">
                Dokumenty na stiahnutie
              </p>
              <p className="text-[#44525E] text-[12px] mt-[20px]">
                Oznámenie o dražbe.pdf
              </p>
              <p className="text-[#44525E] text-[12px]">Znalecký posudok.pdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
