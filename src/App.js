import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './responsive.css'
import { Screens } from './constant/routes';
import Home from './pages/home/Home';
import Service from './pages/home/Service';
import RateCard from './pages/home/RateCard';
import ServiceCart from './pages/home/ServiceCart';
import CartPage from './pages/home/CartPage';
import PaymentOption from './pages/home/PaymentOption';
import CartDetail from './pages/home/CartDetail';
import OrderConfirmation from './pages/home/OrderConfirmation';
import ServiceServices from './pages/services/Service';
import ServiceRateCard from './pages/services/RateCard';
import ServiceCartServices from './pages/services/ServiceCart';
import ServiceCartPage from './pages/services/CartPage';
import ServicePaymentOption from './pages/services/PaymentOption';
import ServiceCartDetail from './pages/services/CartDetail';
import ServiceOrderConfirmation from './pages/services/OrderConfirmation';
import ServiceHome from './pages/services/Home';
import Login from './pages/auth/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path={Screens.Home} element={<Home />} />
        <Route path={Screens.service} element={<Service />} />
        <Route path={Screens.rateCard} element={<RateCard />} />
        <Route path={Screens.serviceCart} element={<ServiceCart />} />
        <Route path={Screens.cartPage} element={<CartPage />} />
        <Route path={Screens.paymentOption} element={<PaymentOption />} />
        <Route path={Screens.cartDetail} element={<CartDetail />} />
        <Route path={Screens.orderConfirm} element={<OrderConfirmation />} />

        {/* service */}

        <Route path={Screens.amcService} element={<ServiceHome />} />
        <Route path={Screens.amchomeservice} element={<ServiceServices />} />
        <Route path={Screens.amcrateCard} element={<ServiceRateCard />} />
        <Route path={Screens.amcserviceCart} element={<ServiceCartServices />} />
        <Route path={Screens.amccartPage} element={<ServiceCartPage />} />
        <Route path={Screens.amcpaymentOption} element={<ServicePaymentOption />} />
        <Route path={Screens.amccartDetail} element={<ServiceCartDetail />} />
        <Route path={Screens.amcorderConfirm} element={<ServiceOrderConfirmation />} />

        {/* Auth */}
        <Route path={Screens.authLogin} element={<Login />} />


        
      </Routes>
    </>
  );

}

export default App
