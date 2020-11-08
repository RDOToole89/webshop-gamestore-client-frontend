import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import Signin from "./pages/Signin/Signin";
import { bootstrapLoginState } from "./store/Signin/signinActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id?" component={ProductDetailsPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
