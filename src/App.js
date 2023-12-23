//import './App.css';
import GlobalRouter from "./routes/GlobalRouter";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
//importamos el css que se compartira para todas las vistas
import './styles/styles.css';

function App() {
  return (
  <div className="App-header">
    <Header/>
    <GlobalRouter/>
    <Footer/>
  </div>
  );
}

export default App;
