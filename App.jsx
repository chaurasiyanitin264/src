import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import DashBoard from "./Admin/Dashboard";
import InsertProduct from "./Admin/InsertProduct";
import CheckOut from "./pages/CheckOut";
import PaymentDone from "./pages/PaymentDone";
import CustomerDetails from "./Admin/CustomerDetails";
import DisplayProduct from "./Admin/DisplayProduct";



const App=()=>{
  return(
    <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="shop" element={<Shop/>}/> 
              <Route path="search" element={<Search/>}/>
              <Route path="cart" element={<Cart/>}/> 
              <Route path="product" element={<Product/>}/> 
              <Route path="contact" element={<Contact/>}/> 
              <Route  path="prodetail/:id" element={<ProductDetail/>}/>
              <Route path="checkout/:amt" element={<CheckOut/>}/>
              <Route path="paydone" element={<PaymentDone/>}/>
              </Route>
              </Routes>
              <Routes>
                 <Route path="dashboard" element={<DashBoard/>}>
                   <Route path="insertpro" element={<InsertProduct/>}/>
                   <Route path="displaypro" element={<DisplayProduct/>}/>
                   <Route path="customerdetails" element={<CustomerDetails/>}/>
                   <Route path="homepro" element={<Home/>}/>
                 </Route>
           </Routes>
           
          
         </BrowserRouter>
        
    </>
  )
}

export default App;