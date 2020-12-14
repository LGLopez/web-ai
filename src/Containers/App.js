// import logo from '../logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CardsHolder from '../Components/CardsHolder';


class App extends React.Component{
  constructor(){
    super();
    
    this.state = {
      cardsInfo: []
    };
  }

  componentDidMount(){
    const getData = () => {
      fetch('data-cards.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }).then( (response) => {
        return response.json();
      }).then( (myJson) => {
        {this.setState( this.state.cardsInfo = myJson )}
      })
    }

    getData();
  }
  
  render(){
    const {cardsInfo} = this.state;
    return (
      <div className="App">
        <h1>Web AI! (Solo pa ver mis cositas)</h1>
        <CardsHolder forCards = {cardsInfo}>
        </CardsHolder>
      </div>
    );
  }

}

export default App;
