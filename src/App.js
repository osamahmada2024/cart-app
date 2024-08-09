import { Route, Routes } from "react-router";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
import View from "./components/View";

function App() {
  return (
    <div className=" App">
      <Provider store={store}>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path={"/product-desc/:id"} element={<View />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
