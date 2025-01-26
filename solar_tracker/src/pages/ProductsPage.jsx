import React from "react";
import ProductMainComponent from "../components/ProductMainComponent";
import CustomerReview from "../components/CustomerReview";
import VideoSection from "../components/VideoTutorials";

const ProductsPage = () => {
  return (
    <div>
      <ProductMainComponent />
      <VideoSection />
      <CustomerReview />
    </div>
  );
};

export default ProductsPage;
