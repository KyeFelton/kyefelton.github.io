import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'

function App() {

  // useEffect(() => {    document.title = "My app";  });

  return (
    <div className="App">
      <Menu />
      <Banner />
    </div>
  );
}

export default App;
