import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import NavBar from "./components/utilit/NavBar.js";
import { Container } from "react-bootstrap";
import Footer from "./components/utilit/Footer.js";
import CartScreen from "./screens/CatScreen.js";
import SopningScreen from "./screens/SopningScreen.js";

import SigninScreen from "./screens/SingInScreen.js";
import SingUpScreen from "./screens/SingUpScreen.js";
import PaymentMethod from "./screens/PaymentMethod.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderSecreen.js";
import OrderHistoryScreen from "./screens/OrderHistoryScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import SearchScreen from "./screens/SearchScren.js";
import DashboardScreen from "./screens/DashboardScreen.js";
import AddProduct from './admin/screens/AddProduct.js';
import AdminProductList from "./admin/screens/AdminProductList.js";
import AdminProductScreen from "./admin/screens/AdminProductScreen.js";

// import ProtoctetRoue from "./components/ProtoctetRoue.js";
// import Humberger from './components/utilit/Humberger';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <NavBar /> 
        <main>
          <Container className="mt-3">
            <Routes> 
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/shipping" element={<SopningScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SingUpScreen />} />
              <Route path="/payment" element={<PaymentMethod />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/Dashbord" element={<DashboardScreen />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/productList" element={<AdminProductList />} />
              <Route path="/productList/:slug" element={<AdminProductScreen />} />
              

          
              <Route
                path="/order/:id"
                element={
                  // <ProtoctetRoue>
                    <OrderScreen />
                  // </ProtoctetRoue>
                }
              />
              <Route
                path="/orderhistory"
                element={
                  // <ProtoctetRoue>
                    <OrderHistoryScreen />
                  // </ProtoctetRoue>
                }
              />
              <Route
                path="/profile"
                element={
                  // <ProtoctetRoue>
                    <ProfileScreen />
                  // </ProtoctetRoue>
                }
              />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
