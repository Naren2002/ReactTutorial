import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <div className='container'>
        <Navbar dark color = "primary">
          <NavbarBrand href = "#">Restaurant in French</NavbarBrand>
        </Navbar>
        <Menu/>
        </div>
    </div>
  );
}

export default App;
