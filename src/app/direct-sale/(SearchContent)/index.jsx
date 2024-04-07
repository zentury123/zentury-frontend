import Pagination from "@/components/pagination/page";

import React, { useCallback, useState } from "react";
import Slider from "@mui/material/Slider";

import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import useGetRealState from "@/customHooks/useGetRealState";

import useDebounce from "../../../customHooks/useDebounce";
import Spinner from "@/components/Spinner";
import {formatCurrency} from "@/utils";



const region = [
  "Bratislava",
  "Košice",
  "Petržalka",
  "Žilina",
  "Prešov",
  "Nitra",
  "Banská Bystrica",
  "Trnava",
  "Trenčín",
  "Martin",
  "Poprad",
  "Prievidza",
  "Zvolen",
  "Považská Bystrica",
  "Michalovce",
  "Nové Zámky",
  "Spišská Nová Ves",
  "Humenné",
  "Komárno",
  "Liptovský Mikuláš",
  "Bardejov",
  "Levice",
  "Lučenec",
  "Piešťany",
  "Ružomberok",
  "Topoľčany",
  "Pezinok",
  "Trebišov",
  "Čadca",
  "Dubnica nad Váhom",
  "Rimavská Sobota",
  "Dunajská Streda",
  "Partizánske",
  "Vranov nad Topľou",
  "Šaľa",
  "Hlohovec",
  "Brezno",
  "Senica",
  "Nové Mesto nad Váhom",
  "Senec",
  "Snina",
  "Žiar nad Hronom",
  "Malacky",
  "Rožňava",
  "Dolný Kubín",
  "Bánovce nad Bebravou",
  "Púchov",
  "Handlová",
  "Kežmarok",
  "Stará Ľubovňa",
  "Sered’",
  "Skalica",
  "Kysucké Nové Mesto",
  "Galanta",
  "Detva",
  "Levoča",
  "Šamorín",
  "Sabinov",
  "Veľký Krtíš",
  "Stupava",
  "Revúca",
  "Nová Dubnica",
  "Zlaté Moravce",
  "Myjava",
  "Moldava nad Bodvou",
  "Bytča",
  "Svidník",
  "Holíč",
  "Fiľakovo",
  "Štúrovo",
  "Stropkov",
  "Kolárovo",
  "Banská Štiavnica",
  "Šurany",
  "Modra",
  "Tvrdošín",
  "Veľké Kapušany",
  "Krompachy",
  "Bernolákovo",
  "Stará Turá",
  "Veľký Meder",
  "Vráble",
  "Smižany",
];

function SearchContent() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [auctionType, setAuctionType] = useState("");
  const [keywords, setKeywords] = useState("");
  const [priceRange, setPriceRange] = useState(5000000);
  const [pageNumber, setPageNumber] = useState(1);

  // Fetching real estate data based on the current filter settings
  const { data,pagination, loading } = useGetRealState(
    "direct",
    priceRange,
    selectedRegion,
    propertyType,
    auctionType,
    pageNumber,
    keywords
  );

  const handleRegionChange = useCallback((event) => {
    setSelectedRegion(event.target.value);
  }, []);

  const handlePropertyTypeChange = useCallback((event) => {
    setPropertyType(event.target.value);
  }, []);

  const handleAuctionTypeChange = useCallback((event) => {
    setAuctionType(event.target.value);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const debouncedSetKeywords = useDebounce((newKeyword) => {
    setKeywords(newKeyword);
  }, 500);

  const deboucePriceRange = useDebounce((price) => {
    setPriceRange(price);
  }, 500);

  const handleKeywordChange = (event) => {
    debouncedSetKeywords(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    console.log(newValue);
    deboucePriceRange(newValue);
  };

  function handlePageNumber(page){
    setPageNumber(page)
  }

  if (loading) {
    return (<div className="flex items-center justify-center h-[70vh]">
      <Spinner />
    </div>)
  }


  return (
    <div>
      <div className="flex flex-wrap  lg:mt-[57px] mt-[30px]">
        <input
          className="bg-[#F9FCFF] border border-[#C7D5E1] indent-4 w-[280px] h-[49px] rounded-[18px] mr-[17px] mt-3"
          type="text"
          placeholder="Kĺúčové slovo"
          onChange={handleKeywordChange}
        />
        <div>
          <div
            onClick={toggleMenu}
            className=" w-[98px] mr-[17px] mt-3  h-[49px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
          >
            <p>Cena</p>
          </div>
          <div
            className={`fixed ${
              isOpen ? "block" : "hidden"
            } top-0 left-0 w-full h-full bg-black opacity-0 z-10`}
            onClick={() => setIsOpen(false)}
          ></div>
          {isOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg z-10 px-[20px] w-[250px]">
              <div className="flex justify-between mt-[16px]">
                <p className="text-[12px] text-[#848484]">0 €</p>
                <p className="text-[12px] text-[#848484]">1 000 000 €</p>
              </div>
              <Box sx={{ width: "100%" }}>
                <Slider
                  value={priceRange}
                  aria-label="Default"
                  min={0}
                  max={10000000}
                  step={5000}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  className="slider-class"
                />
              </Box>
              <p className="text-[12px] text-[#000000] pb-[20px]">Uložiť</p>
            </div>
          )}
        </div>

        <select
          placeholder="Kraj"
          value={selectedRegion}
          className="w-[150px] mr-[17px] p-[10px] mt-3 h-[50px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
          onChange={handleRegionChange}
        >
          <option value="">Kraj</option>
          {region.map((area, index) => (
            <option value={area} key={index}>
              {area}
            </option>
          ))}
        </select>

        <div className="relative">
          <select
            placeholder="Typ nehnuteľnosti"
            value={propertyType}
            className="w-[175px] mr-[17px] p-[10px] mt-3 h-[50px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
            onChange={handlePropertyTypeChange}
          >
            <option value={""}> Typ nehnuteľnosti</option>

            <option value={"Dom"}> Dom</option>
            <option value={"Byt"}> Byt</option>
          </select>
        </div>
        <div className="relative">
          <select
            placeholder="Dražba"
            value={auctionType}
            className="w-[150px] mr-[17px] p-[10px] mt-3 h-[50px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
            onChange={handleAuctionTypeChange}
          >
            <option value="">All</option>

            <option value="Dražba">Dražba</option>
            <option value={"Prvá"}>Prvá</option>
            <option value={"Opakovaná"}> Opakovaná</option>
          </select>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-[31px] gap-6">
        {data?.map((item) => (
          <div
            onClick={() =>
              router.push(`direct-sale/${item?.slug}` || "/one-action")
            }
            className="p-[12px] bg-[#F9FCFF] border border-[#C7D5E1] rounded-[18px] cursor-pointer"
          >
            <div className="relative">
              <img
                src={item?.mainImage}
                alt=""
                className="object-cover w-full h-[280px]"
              />
              {/* <div className="px-[15px] py-[5px] border border-white rounded-[7px] absolute top-[18px] left-[17px] bg-[#C6A15A]">
                <p className=" text-[12px] text-white font-semibold">
                  {item?.label}
                </p>
              </div> */}
              <p className="text-white text-[18px] bottom-3 absolute left-3">
                {formatCurrency(item?.price)}
              </p>
            </div>
            <p className="font-semibold text-black text-[13px] mt-5">
              {item?.title}
            </p>
            <div className="mt-[9px] flex items-center">
              <img src="/location1.svg" alt="location-icon" />
              <p className="text-[12px] ml-[7px]">{item?.region}</p>
            </div>
            <div className="flex">
              <div className="flex items-center mt-[13px]">
                <img src="/icon-home.svg" alt="home-icon" />
                <p className="text-[#44525E] text-[12px] ml-[7px] font-semibold">
                  {item.typeOfRealEstate}
                </p>
              </div>
              {/* <div className="flex items-center mt-[13px] ml-[40%]">
                <img src="/calendar.svg" alt="" />
                <p className="text-[#44525E] text-[12px] ml-[7px] font-semibold">
                  {new Date(item.dateOfAuction).toLocaleDateString()}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <Pagination totalPages={pagination.pages} count={pagination.count} currentPage={pageNumber} setPageNumber={handlePageNumber} />

    </div>
  );
}

export default SearchContent;
