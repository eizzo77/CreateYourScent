import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.components";
import { HomePage } from "./Pages/HomePage.components";
import { QuizPage } from "./Pages/QuizPage.components";
import "./App.css";

function App() {
  return (
    <body>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/quiz" exact component={QuizPage} />
          {/* <Route path="/" component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </body>
  );
}

export default App;
