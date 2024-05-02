import React from "react";
import ImageGallery from "../../../components/Image-gallery/index";
import Map from "../../../components/Map";
import DirectSaleModal from "./_components/DirectSaleModal";
import { formatCurrency } from "@/utils";

export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/all?saleType=direct`
  ).then((res) => res.json());

  return posts.result.map((post) => ({
    slug: post.slug,
  }));
}
let data;
const RealState = async ({ params }) => {
  const { slug } = params;
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/real-estate/${slug}`,
      {
        next: { revalidate: 30 }, // Revalidate every hour
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
        <div className="flex items-center mt-[40px]">
          <p className="text-[29px] font-semibold">Cena:</p> &nbsp;
          <p className="text-[29px]"> {formatCurrency(data?.price)}</p>
        </div>
        <DirectSaleModal propertyId={data?._id} />
        <div className="grid grid-cols-12 mt-[27px] lg:gap-10 gap-5">
          <div className="xl:col-span-4 lg:col-span-5 md:col-span-6 col-span-12  ">
            <ImageGallery galleryImages={data?.images || []} />
            <Map location={data?.coordinates} zoom={data?.zoom} />
            {(data?.document1?.data || data?.document2?.data) && <div><p class="text-[21px] font-semibold mt-[58px]">Dokumenty na stiahnutie</p>
              {data?.document1?.data && <a href={data?.document1?.data} download={true} class="text-[#44525E] text-[12px] block mt-[20px]">{data?.document1?.fileName}</a>}
              {data?.document2?.data && <a href={data?.document2?.data} download={true} class="text-[#44525E] text-[12px] block">{data?.document2?.fileName}</a>}
            </div>}
          </div>
          <div className="xl:col-span-8 lg:col-span-7 md:col-span-6 col-span-12 text-[12px] text-[#44525E] leading-[18px]">
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default RealState;
