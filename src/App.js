import './App.css';
import React from 'react';

const tableHeader = ["State", "Cases", "Today Cases", "Deaths", "Today Deaths",
  "Recovered", "Active", "Cases / 1Millions", "Deaths / 1Million",
  "Tests", "Test / 1 Million", "Population"];


// https://documenter.getpostman.com/view/10808728/SzS8rjbc#a10615ea-249c-4090-9e50-ef68dfaa11c2
const allCountriesApi = "https://corona.lmao.ninja/v2/countries?yesterday=&sort=true";
const statesApi = "https://corona.lmao.ninja/v2/states?sort=active&yesterday=true";
const allCountries = "https://api.covid19api.com/countries";
const stateInfo = "https://covidtracking.com/api/states/info";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      covidResult: []
    };
  }

  componentDidMount() {
    this.fetchResult();
  }

  fetchResult() {
    fetch(statesApi)
      .then((Response) => Response.json())
      .then((data) => {
        console.log("==>", data);
        this.setState({
          covidResult: data
        });

      });

  }
  renderTableBody() {
    return this.state.covidResult.map((covid, index) => {
      const {
        state, cases, todayCases, deaths, todayDeaths,
        recovered, active, casesPerOneMillions, deathsPerOneMillion,
        tests, testPerOneMillion, population
      } = covid;
      return (
        <div key={index} className="tr">
          <div className="tc1">{state}</div>
          <div className="tc1">{cases}</div>
          <div className="tc1">{todayCases}</div>
          <div className="tc1">{deaths}</div>
          <div className="tc1">{todayDeaths}</div>
          <div className="tc1">{recovered}</div>
          <div className="tc1">{active}</div>
          <div className="tc1">{casesPerOneMillions}</div>
          <div className="tc1">{deathsPerOneMillion}</div>
          <div className="tc1">{tests}</div>
          <div className="tc1">{testPerOneMillion}</div>
          <div className="tc1">{population}</div>
        </div>
      );
    });
  }

  renderTableHeader() {
    return tableHeader.map((header, index) => {

      return (
        <div key={index} className="th">
          {header}
        </div>
      );
    }
    );
  }

  render() {
    let header = this.renderTableHeader();
    let tableBody = this.renderTableBody();

    return (

      <div className="body">
        <div className="mainContent">
          <div className="title blueFont">
            <span>Covid Cases is USA : {new Date().toLocaleString()}</span>
            <div >
              <span>Sample Application</span>
            </div>
          </div>
          <div className="div-table">
            <div className="tr">{header}</div>
            {tableBody}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
