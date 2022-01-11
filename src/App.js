import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {Component} from "react";
import { DISHES } from './shared/dishes';


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render(){
    return (
      <div>
        <div className='container'>
          <Navbar dark color = "primary">
            <NavbarBrand href = "#">Restaurant in French</NavbarBrand>
          </Navbar>
          <Menu dishes = {this.state.dishes}/>
        </div>
      </div>
    );
  }
}

export default App;
