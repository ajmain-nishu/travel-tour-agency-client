import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallery from './components/Gallery/Gallery';
import Service from './components/Service/Service';
import OrderPlace from './components/OrderPlace/OrderPlace';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddServices from './components/AddServices/AddServices';
import Founder from './components/Founder/Founder';





function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Service></Service>
          </PrivateRoute>
          <Route exact path="/service/gallery">
            <Gallery></Gallery>
          </Route>
          <PrivateRoute exact path="/orderplace/:serviceId">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/founder">
            <Founder></Founder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App;