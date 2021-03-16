import React from 'react';
import logo from './logo.svg';
import './App.css';
import { container } from '@aws-amplify/ui';

function App() {

  var callAPI = (firstName,lastName)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://x2n1f70u5f.execute-api.ap-northeast-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from V2</h1>
        </header>
      </container>
      <container>
        <form className="InputGroup">
          <label>First Name :</label>
          <input type="text" id="fName"/>
          <label>Last Name :</label>
          <input type="text" id="lName"/>
          <button type="button" onclick="callAPI(document.getElementById('fName').value,document.getElementById('lName').value)">Call API</button>
        </form>
      </container>
    </div>
  );
}

export default App;
