import React from "react";
import "./App.css";
import Card from "./Components/Card";
import mi from "./images/Messi.jpeg";
import ney from "./images/Neymar.jpeg";
import ronaldo from "./images/Cristiano Ronaldo.jpeg";
import pele from "./images/Pele.jpeg";
import maradona from "./images/Diego Maradona.jpeg";
import platini from "./images/Platini.jpeg";
import bellingham from "./images/Bellingham.jpeg";
import mbappe from "./images/Mbappe.jpeg";
import vinicius from "./images/Vinicius.jpeg";
import football from "./images/Football.jpg";
import pedri from "./images/Pedri.jpeg";

const App = () => {
  return (
    <><><div className="App">
      <header className="header">
        <img className="logo" src="src/images/football.jpg" alt="Football" />
        <h1 className="title">Football Legends and Rising Stars</h1>
      </header>
      <div className="container">
        <div className="section">
          <h2 className="section-title">Greatest of All Time (GOATs)</h2>
          <div className="card-container">
            <Card name="Lionel Messi" image={mi} link="https://en.wikipedia.org/wiki/Lionel_Messi" />
            <Card name="Neymar Jr." image={ney} link="https://en.wikipedia.org/wiki/Neymar" />
            <Card name="Cristiano Ronaldo" image={ronaldo} link="https://en.wikipedia.org/wiki/Cristiano_Ronaldo" />
          </div>
        </div>
      </div>
    </div>
      <div className="section">
        <h2 className="section-title">Legends</h2>
        <div className="card-container">
          <Card name="Pelé" image={pele} link="https://en.wikipedia.org/wiki/Pel%C3%A9" />
          <Card name="Diego Maradona" image={maradona} link="https://en.wikipedia.org/wiki/Diego_Maradona" />
          <Card name="Michel Platini" image={platini} link="https://en.wikipedia.org/wiki/Michel_Platini" />
        </div>
      </div>
    </><div className="section">
        <h2 className="section-title">Rising Stars</h2>
        <div className="card-container">
          <Card name="Jude Bellingham" image={bellingham} link="https://en.wikipedia.org/wiki/Jude_Bellingham" />
          <Card name="Kylian Mbappé" image={mbappe} link="https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9" />
          <Card name="Vinícius Júnior" image={vinicius} link="https://en.wikipedia.org/wiki/Vin%C3%ADcius_J%C3%BAnior" />
          <Card name="Pedri" image={pedri} link="https://en.wikipedia.org/wiki/Pedri" />
        </div>
      </div></>
  

        
        

    
  );
};

export default App;



