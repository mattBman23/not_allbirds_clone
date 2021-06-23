import React from "react";

export const BannerMessage = () => {
  return (
    <div className="bg-lime-800 text-white px-4 py-1">
      <p className="text-xs font-medium text-center">
        We&apos;re raising prices on all products by $1 today in support of the
        planet.{" "}
        <a href="#" className="underline">
          Learn More.
        </a>
      </p>
    </div>
  );
};
