import Head from "next/head";
import Image from "next/image";

import { CategoryList } from "../components/CategoryList";
import { BannerMessage } from "../components/BannerMessage";
import { NavigationBar } from "../components/NavigationBar";
import { SeasonalBanner } from "../components/SeasonalBanner";

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Allbirds</title>
      </Head>

      <BannerMessage />
      <NavigationBar />

      <main>
        <div>
          <div className="flex justify-between pt-4 pb-3 px-8 items-center">
            <div>
              <div className="text-xs font-medium text-gray-900 space-x-1">
                <a href="#" className="underline">
                  Home
                </a>
                <span>/</span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                Womens&#39;s Shoes
              </div>
            </div>
            <div className="flex">
              <button className="h-6 w-6">
                <svg
                  className="transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <CategoryList />
        </div>
        <SeasonalBanner />
      </main>
    </div>
  );
}
