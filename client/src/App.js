import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.components";
import { HomePage } from "./Pages/HomePage.components";
import { QuizPage } from "./Pages/QuizPage.components";
import { StorePage } from "./Pages/StorePage.components";
import { CartPage } from "./Pages/CartPage.components";
import "./App.css";
import axios from "axios";

function App() {
  const saveOrder = async (itemObj) => {
    console.log(itemObj);
    await axios.post("http://localhost:5555/api/order", {
      candle: { ...itemObj },
      date: new Date().toDateString(),
    });
  };

  return (
    <body>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/quiz"
            exact
            component={() => <QuizPage saveOrder={saveOrder} />}
          />
          <Route path="/store" exact component={StorePage} />
          <Route path="/cart" exact component={CartPage} />
          {/* <Route path="/" component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </body>
  );
}

export default App;
