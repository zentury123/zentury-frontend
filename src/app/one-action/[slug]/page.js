import React from "react";
import ImageGallery from "../../../components/Image-gallery/index";
import Map from "../../../components/Map";
import RegisterModal from "./_components/RegisterModal";

export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?saleType=auction`
  ).then((res) => res.json());

  return posts.result.map((post) => ({
    slug: post.slug,
  }));
}

export default async function OneAction({ params }) {
  const { slug } = params;
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/${slug}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    const response = await res.json();
    const d = await response?.result;
    return d;
  };
  const data = await fetchData();

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="lg:mt-[190px] mt-[90px] text-black xl:px-[81px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px]">
          {data?.title}
        </p>
        <div className=" m-auto border border-[#C7D5E1] rounded-[36px] lg:px-[114px] px-[30px] py-[50px] mt-[33px]">
          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-[100px] gap-[30px]">
            <div className="w-[100%]">
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Dražba:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data?.typeOfAuction}
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Dátum dražby:</p>
                <p className="text-[#44525E] text-[12px]">
                  {new Date(data.dateOfAuction).toLocaleDateString()}
                </p>
              </div>
              <div className="flex justify-between  pb-3 border-b border-[#C7D5E1]  mt-[13px]">
                <p className="text-[13px] font-semibold w-[150px]">
                  Miesto dražby:
                </p>
                <p className="text-[#44525E] text-[12px] text-end">
                  Veľký salónik na 1. poschodí hotela Arcade, Námestie SNP 5,
                  974 01 Banská Bystrica
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Prvá obhliadka:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data.firstInspection}
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Druhá obhliadka:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data.secondInspection}
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Najnižšie podanie:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data.lowestSubmission} €
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">
                  Minimálne prihodenie:
                </p>
                <p className="text-[#44525E] text-[12px]">
                  {data.minimumTurnover} €
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">
                  Cena zistená znaleckým posudkom:
                </p>
                <p className="text-[#44525E] text-[12px]">{data.price} €</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Dražobná zábezpeka:</p>
                <p className="text-[#44525E] text-[12px]">{data.security} €</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Mesto:</p>
                <p className="text-[#44525E] text-[12px]">{data.city}</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Regiónu:</p>
                <p className="text-[#44525E] text-[12px]">{data.region}</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Katastrálne územie:</p>
                <p className="text-[#44525E] text-[12px]">
                  {data.cadastralArea}
                </p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Ulica:</p>
                <p className="text-[#44525E] text-[12px]">{data.street}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {/* <div
              // onClick={() => router.push("/registration")}
              className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[308px] h-[44px] rounded-full flex justify-center items-center  mt-[30px]"
            >
              <p className="font-semibold text-[12px] ml-[10px]">
                Chcem sa zaregistrovať na dražbu
              </p>
            </div> */}
            <RegisterModal id={data._id} />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-[58px] lg:gap-10 gap-5">
          <div className="xl:col-span-4 lg:col-span-5 md:col-span-6 col-span-12  ">
            <ImageGallery galleryImages={data?.images || []} />

            <Map location={data.coordinates} zoom={data.zoom} />
            {/* <img src="/Map1.png" alt="" className="mt-10" /> */}
            {/* <div>
              <p className="text-[21px] font-semibold mt-[58px]">
                Dokumenty na stiahnutie
              </p>
              <p className="text-[#44525E] text-[12px] mt-[20px]">
                Oznámenie o dražbe.pdf
              </p>
              <p className="text-[#44525E] text-[12px]">Znalecký posudok.pdf</p>
            </div> */}
          </div>
          <div
            className="xl:col-span-8 lg:col-span-7 md:col-span-6 col-span-12 text-[17px] text-[#44525E] leading-[22px]"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {/* <div className="xl:col-span-4 lg:col-span-5 md:col-span-6 col-span-12 md:hidden ">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
