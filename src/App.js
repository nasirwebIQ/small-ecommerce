import Navbar from "./components/Navbar";
// import Slider from "./components/Slider";
import "./components/style.css";
// import { SliderData } from "./components/SliderData";
import { ProductsData } from "./components/ProductsData";
import Products from "./components/Products";
import ProdcutDetail from "./components/ProdcutDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import DrawerContextProvider from "./context/DrawerContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products product={ProductsData} />,
  },
  {
    path: "/product/:id",
    element: <ProdcutDetail />,
  },
]);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [cartProduct, setCartProduct] = useState();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DrawerContextProvider
      value={{ isOpen, onDrawerClose: () => toggleDrawer() }}
    >
      <Navbar drawer={toggleDrawer} />

      <RouterProvider router={router} />
    </DrawerContextProvider>
  );
}

export default App;
