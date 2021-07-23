import Booking from './Components/Booking/Booking'
import Login from './Components/Login/Login';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  const handleClick = () => {
    window.sessionStorage.clear(); //clear all localstorage
    window.sessionStorage.removeItem("token"); //remove one item
  }


  if (!window.sessionStorage.getItem("token")) {
    return <Login setToken={setToken} />
  }

  const currToken = JSON.parse(window.sessionStorage.getItem("token"))

  return (
    <div className="App">
      <h1>Hello fron booking</h1>
      <a href="/" onClick={handleClick}>logout</a>
      <div>
      </div>
      <Booking />
    </div>
  );
}

export default App;
