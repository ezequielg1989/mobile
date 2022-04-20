import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContext from "./Context/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Welcome to MobileStore" />
            </Route>
            <Route path="/detalle/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
