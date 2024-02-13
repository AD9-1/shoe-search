import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import listItems from "./data";
import Card from "./components/Card";

function App() {
  const [selectedItemCategory, setSelectedItemCategory] = useState("");
  const [selectedItemPrice, setSelectedItemPrice] = useState("");
  const [selectedItemColor, setSelectedItemColor] = useState("");
  const [selectedItemButton, setSelectedItemButton] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleRadioCategory = (e) => {
    setSelectedItemCategory(e.target.value);
  };
  const handleRadioColor = (e) => {
    setSelectedItemColor(e.target.value);
  };
  const handleRadioPrice = (e) => {
    setSelectedItemPrice(e.target.value);
  };
  const handleButton = (e) => {
    setSelectedItemButton(e.target.value);
  };

  const filteredData = (
    selectedItemCategory,
    selectedItemPrice,
    selectedItemColor,
    selectedItemButton,
    listItems,
    query
  ) => {
    let filteredProducts = listItems;

    if (query) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    } else if (selectedItemCategory) {
      if (selectedItemColor) {
        if (selectedItemPrice)
          filteredProducts = filteredProducts.filter(
            ({ category, color, newPrice }) =>
              category === selectedItemCategory &&
              newPrice === selectedItemPrice &&
              color === selectedItemColor
          );
        else
          filteredProducts = filteredProducts.filter(
            ({ category, color }) =>
              category === selectedItemCategory && color === selectedItemColor
          );
      } else if (selectedItemPrice) {
        if (selectedItemColor)
          filteredProducts = filteredProducts.filter(
            ({ category, color, newPrice }) =>
              category === selectedItemCategory &&
              newPrice === selectedItemPrice &&
              color === selectedItemColor
          );
        else
          filteredProducts = filteredProducts.filter(
            ({ category, newPrice }) =>
              category === selectedItemCategory &&
              newPrice === selectedItemPrice
          );
      } 
      else
        filteredProducts = filteredProducts.filter(
          ({ category }) => category === selectedItemCategory
        );
    } 
    else if (selectedItemColor) {
      if (selectedItemPrice) {
        filteredProducts = filteredProducts.filter(
          ({ color, newPrice }) =>
            color === selectedItemColor && newPrice === selectedItemPrice
        );
      }
      else{
        filteredProducts=filteredProducts.filter(({color})=>color===selectedItemColor)
      }
    } 
    
    
    else if (selectedItemButton) {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selectedItemButton
      );
    } else if (selectedItemColor) {
      filteredProducts = filteredProducts.filter(
        ({ color }) => color === selectedItemColor
      );
    } else if (selectedItemPrice) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) => newPrice === selectedItemPrice
      );
    } else if (selectedItemCategory && selectedItemColor) {
      filteredProducts = filteredProducts.filter(
        ({ category, color }) =>
          category === selectedItemCategory && color === selectedItemColor
      );
    }
    return filteredProducts.map((product) => (
      <Card key="_index" data={product} />
    ));
  };

  const result = filteredData(
    selectedItemCategory,
    selectedItemPrice,
    selectedItemColor,
    selectedItemButton,
    listItems,
    query
  );

  return (
    <div className="App">
      <Sidebar
        handleRadioCategory={handleRadioCategory}
        handleRadioColor={handleRadioColor}
        handleRadioPrice={handleRadioPrice}
      />
      <Navigation handleSearch={handleSearch} query={query} />
      <Recommended handleButton={handleButton}></Recommended>
      <Products result={result} />
    </div>
  );
}

export default App;
