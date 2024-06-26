import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import './App.css'
import Section from './components/Section'
import ShoppingCart from './components/ShoppingCart'
import FlyoutMenu from './components/FlyoutMenu'
import SelectMenu from './components/SelectMenu'
import CategoryFilter from './components/CategoryFilter'
import ProductQuickView from './components/ProductQuickView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
<Header/>
<Section/>
<HeroSection/>
<ShoppingCart/>
      </section>
    <FlyoutMenu/>
    <SelectMenu/>
    <CategoryFilter/>
    <ProductQuickView/>
    </>
  )
}

export default App

// App.js
// import React from "react";
// import HeroSection from "./components/HeroSectionC";

// const App = () => {
//   return (
//     <div>
//       {/* You can replace this image URL with your own */}
//       <HeroSection backgroundImage="https://t3.ftcdn.net/jpg/05/92/95/50/360_F_592955026_DMhWXFCdqClUZcqjgzw7ZeroWD3jHSIg.jpg" />
//     </div>
//   );
// };

// export default App;
