import React from "react";

export const CategoryList = () => {
  const categories = [
    `Women's Running Shoes`,
    `Everyday Sneakers`,
    `Slip-Ons`,
    `High Tops`,
    `Boat Shoes`,
    `Flats`,
    `Weather Repllent Shoes`,
  ];

  return (
    <div className="bg-gray-100 py-3 overflow-x-auto scrollbars-hidden">
      <div className="px-8 text-sm inline-flex space-x-5 md:px-12">
        {categories.map((category, idx) => (
          <a key={idx} href="#" className="text-gray-800 whitespace-nowrap">
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};
