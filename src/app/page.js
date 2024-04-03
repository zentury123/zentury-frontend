"use client";
//import ActionCenter from "@/components/actionCenter";
import ActionCenter from "../components/actionCenter";
import Articals from "@/components/articals";

import HeroBanner from "@/components/hero-banner/page";
import Loader from "@/components/loader";

import OurServices from "@/components/ourServices";
import Partners from "@/components/partners";

import VideoModal from "@/components/videoModal";

import { useEffect, useState } from "react";

export default function Home() {
  const [isVideo, setIsVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModalVideo = () => {
    setIsVideo(true);
  };

  const closeModalVideo = () => {
    setIsVideo(false);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="text-white bg-white min-h-[100vh] relative">

      <HeroBanner openModalVideo={openModalVideo} />
      <ActionCenter openModalVideo={openModalVideo} />
      <OurServices />
      <Partners />
      <Articals />

      <VideoModal isOpen={isVideo} onClose={closeModalVideo} />
    </div>
  );
}
