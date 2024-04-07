"use client";
import React from "react";

const VideoModal = ({ isOpen, onClose }) => {

  return (
    <>
      {Boolean(isOpen) && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50 " onClick={onClose}></div>
          <div className="bg-white  rounded-[30px] z-50 max-w-[1256px] w-[95%] h-[80vh]  overflow-auto">
            <div className="flex justify-end relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black cursor-pointer absolute right-4 top-4 z-10"
                onClick={onClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

              <iframe width="100%"
                style={{ objectFit: "cover", height: "80vh" }}
                src={isOpen}>
              </iframe>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
