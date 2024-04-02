import React from "react";
// import useGetSingleRealState from "@/customHooks/useGetSingleRealState";
export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?saleType=direct`
  ).then((res) => res.json());

  return posts.result.map((post) => ({
    slug: post.slug,
  }));
}
let data;
const RealState = ({ params }) => {
  const { slug } = params;
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/${slug}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    const response = await res.json();
    data = await response?.result;
  };
  fetchData();

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="lg:mt-[190px] mt-[90px] text-black xl:px-[81px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px]">
          {data?.title}
        </p>
        <div className=" m-auto border border-[#C7D5E1] rounded-[36px] lg:px-[114px] px-[30px] py-[50px] mt-[33px]">
          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-[100px] gap-[30px]">
            <div className="w-[100%]">
              {/* <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Dražba:</p>
                <p className="text-[#44525E] text-[12px]">Opakovaná</p>
              </div> */}

              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Prvá obhliadka:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data?.firstInspection}
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Najnižšie podanie:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data?.lowestSubmission} €
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">
                  Minimálne prihodenie:
                </p>
                <p className="text-[#44525E] text-[12px]">
                  {data?.minimumTurnover} €
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Obec:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data?.city} {""}
                  {data?.region}
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Katastrálne územie:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data?.cadastralArea}
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Ulica:</p>
                <p className="text-[#44525E] text-[12px]">{data?.street}</p>
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
            <img src={data?.mainImage} alt="" className="w-[100%]" />
            <div className="flex justify-between mt-[18px]">
              {/* {data
                ? .images?.map((image, index) => (
                    <img key={index} src={image} alt="" />
                  ))
                : ""} */}
              {data?.images &&
                data?.images.map((image, index) => (
                  <img key={index} src={image} alt="" />
                ))}
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
            <p className="font-semibold text-black">Popis nehnuteľnosti</p>
            <p>{data?.address}</p>
            <p className="">{data?.description}</p>
            <br />
            {/* <p className="font-semibold text-black">Dispozičné riešenie:</p>
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
            <div
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
};

export default RealState;
