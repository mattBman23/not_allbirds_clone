/* eslint-disable @next/next/no-img-element */
import React from "react";

export const SeasonalBanner = () => {
  const products = [
    {
      name: "Women's Wool Runner Mizzles",
      description:
        "Our weather-ready snaker made with merino wool and Puddle Guard",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/2SJ7oQMIoIBIzdlmOtAGkA/5e5808e1d641be343569a2c17246a110/SpringCore2020_Shot04_SavannaNight_WRM_0687.jpg",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2",
        },
        {
          name: "Savanna Night Gray (Cream Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1bRf7x3NByrcpXwAMRReII/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vWfiT3XLjf8M3IQFtrK7M/1",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/JKWuH2CmnLWoDEq5Q89D0/1",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1asfoA8T96201A3ODn2r4f/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/75ZQVsFKvFeQ6hpDiTDgXZ/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4pb4Y9adj7i0v4YpuVadSV/1",
        },
      ],
    },
    {
      name: "Women's Wool Runner Mizzles",
      description:
        "Our weather-ready snaker made with merino wool and Puddle Guard",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/2SJ7oQMIoIBIzdlmOtAGkA/5e5808e1d641be343569a2c17246a110/SpringCore2020_Shot04_SavannaNight_WRM_0687.jpg",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2",
        },
        {
          name: "Savanna Night Gray (Cream Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1bRf7x3NByrcpXwAMRReII/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vWfiT3XLjf8M3IQFtrK7M/1",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/JKWuH2CmnLWoDEq5Q89D0/1",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1asfoA8T96201A3ODn2r4f/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/75ZQVsFKvFeQ6hpDiTDgXZ/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4pb4Y9adj7i0v4YpuVadSV/1",
        },
      ],
    },
    {
      name: "Women's Wool Runner Mizzles",
      description:
        "Our weather-ready snaker made with merino wool and Puddle Guard",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/2SJ7oQMIoIBIzdlmOtAGkA/5e5808e1d641be343569a2c17246a110/SpringCore2020_Shot04_SavannaNight_WRM_0687.jpg",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2",
        },
        {
          name: "Savanna Night Gray (Cream Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1bRf7x3NByrcpXwAMRReII/1",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vWfiT3XLjf8M3IQFtrK7M/1",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/JKWuH2CmnLWoDEq5Q89D0/1",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1asfoA8T96201A3ODn2r4f/2",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/75ZQVsFKvFeQ6hpDiTDgXZ/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4pb4Y9adj7i0v4YpuVadSV/1",
        },
      ],
    },
  ];

  const previewMessage = "Cozy sneaker, stormy weather";

  return (
    <div className="py-8">
      <div className="bg-green-700 bg-opacity-20 px-8 py-3 flex items-center space-x-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 transform -rotate-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <div className="flex space-x-2">
            <h2 className="text-sm font-semibold text-gray-900">
              Pay It To The Planet
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="mt-1 text-sm">
            Every Black Friday purchase supports Fridays For Future
          </p>
        </div>
      </div>
      <div className="py-6 px-8 space-y-14">
        {products.map((product, idx) => (
          <div key={idx}>
            <div>
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-800">{product.description}</p>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-6 mt-4 md:items-start">
                <div className="shadow-xl">
                  <div className="shadow-lg">
                    <a href="#">
                      <div>
                        <img
                          className="w-full"
                          src={product.styles[0].image}
                          alt={product.styles[0].name + " shoe"}
                        />
                      </div>
                      <div className="px-4 pt-3">
                        <h3 className="text-sm font-semibold">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-800">
                          {product.styles[0].name}
                        </p>
                      </div>
                    </a>
                    <div className="mt-1 px-4 pb-4">
                      <p className="text-sm text-gray-800">
                        {product.styles[0].price}
                      </p>
                      <div className="flex space-x-6 mt-3 items-center">
                        {product.styles.map((style, idx) => (
                          <button
                            key={idx}
                            className={`h-6 w-6 flex flex-col border focus:outline-none border-gray-300 transform -rotate-45 rounded-full overflow-hidden ${
                              idx === 0 && "ring-2 ring-offset-1 ring-gray-900"
                            }`}
                          >
                            <span className="sr-only">{style.name}</span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[0] }}
                            ></span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[1] }}
                            ></span>
                          </button>
                        ))}
                        <button className="w-7 h-7 border hover:border-gray-400 justify-center rounded-full flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="border-t">
                      <button className="flex justify-between w-full text-sm px-4 py-2">
                        <span className="font-semibold">Quick Add</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative">
                    <img className="w-full" src={product.previewImage} alt="" />
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-900 opacity-95"></div>
                      <div className="absolute inset-x-0 bottom-0">
                        <p className="px-6 pb-6 capitalize font-bold text-white">
                          {previewMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
