import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import store from "./REDUX/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
