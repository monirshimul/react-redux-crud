import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Test from './Test';

// Example imports
import Login from './components/login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello Redux</h1>
        <Login
          title="Add Person"
          inputOneLabel="Username"
          inputOneType="text"
          inputOnePlaceHolder="User Name"
          inputTwoLabel="Organization"
          inputTwoType="text"
          inputTwoPlaceHolder="Organization"
          inputThreeLabel="Designation"
          inputThreeType="text"
          inputThreePlaceHolder="Designation"
          btnValue="Login"
        />

        <Test />
      </div>
    </Provider>
  );
}

export default App;
