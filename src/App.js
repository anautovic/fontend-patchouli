//import Header from './components/Header'
//import Navbar from './components/Navbar'
import Accueil from './screens/Accueil'
import Footer from './components/Footer'
//import {Container} from 'react-bootstrap'
//import { Helmet } from "react-helmet";
import ServicePatchouli from "./screens/ServicePatchouli"
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import GallerieScreen from './screens/GalleryScreen'
import FormationScreen from './screens/FormationScreen'
import ServicePatchouliCoif from './screens/ServicePatchouliCoif'
//import NotFoundPage from './screens/NotFoundPage'
function App() {
  return (

    <Router>
    {/*<Header />*/}
  
    
    
    <Route path="/" component= {Accueil}  exact />
    <Route path="/services" component= {ServicePatchouli}  exact />
    <Route path="/services_coiffure" component= {ServicePatchouliCoif}  exact />
    <Route path="/maboutique" component= {HomeScreen}  exact />
    <Route path="/gallerie" component= {GallerieScreen}  exact />
    <Route path="/formation" component= {FormationScreen} exact  />
    <Route path='/admin/orderlist' component={OrderListScreen} />
    <Route path='/admin/productlist' component={ProductListScreen} exact />
    <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />

    <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
    <Route path='/order/:id' component={OrderScreen} />
    <Route path='/admin/userlist' component={UserListScreen} />
    <Route path='/shipping' component={ShippingScreen} />
    <Route path='/placeorder' component={PlaceOrderScreen} />
    <Route path='/payment' component={PaymentScreen} />
    <Route path='/register' component={RegisterScreen} />
    <Route path='/profile' component={ProfileScreen} />
    <Route path="/login" component= {LoginScreen}  />
    <Route path="/product/:id" component= {ProductScreen}  />
    <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
     
    <Route path='/admin/user/:id/edit' component={UserEditScreen} />
    <Route path="/cart/:id?" component= {CartScreen}  />
    
    
    
    
    <Footer />
    </Router>
  );
}

export default App;
