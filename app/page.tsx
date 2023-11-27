"use client";
import allItems from "@/components/menu_page/allItems";
import chickenTotalItems from "@/data/items/chicken/totalItems";
import HomeStructure from "@/page_structure/home";
import MenuStructure from "@/page_structure/menu";
import ProductStructure from "@/page_structure/product";
import { useState } from "react";

export default function Home() {
  let [selectedPage, updateSelectedPage] = useState(0);
  let [selectedProduct, updateSelectedProduct] = useState(0);
  let [selectedProductData, updateSelectedProductData] = useState([]);
  let [disc, updateDisc] = useState("");
  function updatePage(index) {
    updateSelectedPage(index);
  }
  function updateProduct(index) {
    updateSelectedProduct(index);
    updateDisc(
      "Discover the tantalizing world of chicken at FreshSlice! Indulge in our range of options, from juicy grilled to crispy fried delights. Our menu boasts sandwiches, salads, and more, all spotlighting FreshSlice's commitment to quality and taste."
    );
  }
  function updateProductData(data) {
    updateSelectedProductData(data);
  }

  return (
    <>
      {
        <section className="w-full h-full ">
          <HomeStructure
            updatePage={updatePage}
            updateProduct={updateProduct}
          />
        </section>
      }
    </>
  );
}
