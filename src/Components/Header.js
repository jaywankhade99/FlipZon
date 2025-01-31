import React from "react";

const Header = () => {
  return (
    <div className="flex bg-blue-100 justify-between shadow-xl sticky">
      <div className="p-4">
        <img
          className="w-36"
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-grocery-store-illustration-download-in-svg-png-gif-file-formats--shopping-delivery-ordering-app-pack-e-commerce-illustrations-5592849.png"
          alt="Logo"
        />
      </div>
      <div className="text-3xl font-extrabold text-cyan-800 tracking-wider self-center">
        FlipZon
      </div>
      <ul className="flex px-4 text-center items-center"></ul>
    </div>
  );
};

export default Header;
