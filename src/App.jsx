import { BrowserRouter as Router, Routes , Route  } from "react-router-dom";
import {Home} from "./Home"
import Login from "./Login"
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
