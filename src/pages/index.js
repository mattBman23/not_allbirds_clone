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
        <title>Allbirds TODAY</title>
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
      <footer className="bg-gray-800 py-12">
        <div className="px-6">
          <form action="#">
            <div>
              <label
                htmlFor="email_address"
                className="block text-white text-sm font-medium"
              >
                Enter your email to stay in touch!
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  className="block w-full bg-gray-700 text-white border-2 border-transparent focus:border-white focus:ring-0 transition"
                />
                <div className="absolute inset-0 border-b-2 border-white pointer-events-none"></div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-3 rounded hover:bg-white hover:text-gray-700 focus:outline-none bg-gray-700 font-bold text-sm uppercase tracking-widest text-white w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}
