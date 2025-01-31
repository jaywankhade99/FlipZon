import React, { useState, useEffect, useRef } from "react";
import { Shimmers } from "./Shimmer";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const Body = () => {
  const [mainList, setMainList] = useState([]);
  const [reqList, setReqList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    if (loading || searchVal) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${mainList.length}`
      );
      const data = await response.json();

      if (data.products.length !== 0) {
        setMainList((prevState) => {
          const updatedList = [...prevState, ...data.products].filter(
            (product, index, self) =>
              index === self.findIndex((p) => p.id === product.id)
          );

          setReqList(updatedList);
          return updatedList;
        });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchProducts();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "1px",
      threshold: 1.0,
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`, {
      state: { item },
    });
  };

  return (
    <div className="body">
      <div className="p-4 m-4 flex">
        <div className="search">
          <input
            className="border border-black"
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="px-4 m-4 bg-blue-300 rounded-lg hover:bg-blue-500"
            onClick={() => {
              const searchList = mainList.filter((res) => {
                return res.title
                  .toLowerCase()
                  .includes(searchVal.toLowerCase());
              });
              setReqList(searchList);
            }}>
            Search
          </button>
        </div>
      </div>
      {reqList?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-10">
          {reqList.map((item, index) => (
            <ProductCard
              onClick={() => handleProductClick(item)}
              key={index}
              resData={item}
            />
          ))}
        </div>
      ) : (
        <Shimmers />
      )}
      <div ref={observerRef} className="h-1"></div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          aria-label="Back to Top">
          ↑
        </button>
      )}
    </div>
  );
};

export default Body;
