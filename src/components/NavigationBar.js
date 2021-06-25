/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NavigationBar = () => {
  return (
    <header className="z-10 sticky top-0 flex px-5 py-3 items-center justify-between bg-white">
      <div className="absolute inset-0 shadow-lg opacity-50"></div>
      <div className="flex">
        <button className="h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex">
        <img
          src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
          alt="Allbirds"
          className="h-8"
        />
        {/* <Image
              className="h-8"
              height="100"
              width="100"
              src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
              alt="Allbirds"
            /> */}
      </div>
      <div className="flex">
        <button className="h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
