import React from "react";

const ProductCard = (props) => {
  const { thumbnail, title, price } = props.resData;

  return (
    <div
      onClick={props.onClick}
      className="border border-gray-300 rounded-lg p-4 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-gray-400 duration-300 ease-in-out">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105 duration-300"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        $ {price}
      </p>
    </div>
  );
};

export default ProductCard;
