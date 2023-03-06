import * as React from "react";
import MainDiv from "./components/Main/MainDiv";
import Navbar from "./components/NavBar/Navbar";
import { AddToCartProvider } from "./context/AddToCartContext";
import "./App.css";
import { ProductImgProvider } from "./context/ProductImgContext";

export default function App() {
  return (
    <AddToCartProvider>
      <ProductImgProvider>
        <Navbar />
        <MainDiv />
      </ProductImgProvider>
    </AddToCartProvider>
  );
}
