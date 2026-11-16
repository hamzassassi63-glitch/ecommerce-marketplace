
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Sell from "./pages/Sell";

function App() {
  return (
    <>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sell" element={<Sell />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
