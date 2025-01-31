import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const {
    state: { item, scrollPosition },
  } = useLocation();
  const { thumbnail, title, price, description } = item;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleBackClick = () => {
    navigate("/", { state: { scrollPosition } });
    console.log(scrollPosition);
  };

  if (!item) {
    return (
      <p>
        Product details not available.{" "}
        <button onClick={handleBackClick}>Go Back</button>
      </p>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg p-8 h-[calc(100vh-100px)] overflow-hidden flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-4">{description}</p>
            <p className="text-xl text-blue-600 font-semibold mb-4">${price}</p>
            <div className="mt-8">
              <button
                onClick={handleBackClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
