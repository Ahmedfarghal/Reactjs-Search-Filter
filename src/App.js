import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
   state={
      input: '',
      countries: ['Algeria', 'Argentina', 'Australia', 'Austria', 'Belarus',
        'Belgium', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Denmark', 'Dominican', 'RepublicEcuador,', 'Egypt', 'France',
        'Germany', 'Ghana', 'Greece', 'Guatemala', 'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kenya',
        'Korea', 'Kuwait', 'Latvia', 'Lebanon', 'Malaysia', 'Mexico', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman',
        'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto', 'Rico', 'Qatar', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa', 'Spain', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates',
        'United Kingdom', 'United States', 'Venezuela', 'Vietnam'
      ]
    }

   //search Handler 
searchHandler(event){
  this.setState({
    input:event.target.value
  }, console.log(event.target.value))
}

  render() {
    //filtering the countries 
    let filterCountry = this.state.countries.filter(country => {
      if(country.toLocaleLowerCase().indexOf(this.state.input.toLocaleLowerCase())!== -1){
          return true;
      }
    })

    return (
      <div className="App">
        <form> 
          <input 
            type="text" 
            onChange={this.searchHandler.bind(this)}
            value={this.state.input}>
          </input>
        </form>
        <ul className="grid-container">
        {filterCountry.map(country => {
          return <li className=" grid-item" key={country}>{country}</li>})}
        </ul>
      </div>
    );
  }
}

