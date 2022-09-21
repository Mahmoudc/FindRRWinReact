import React, { Component } from 'react';
import AddRRUser from './components/AddRRUser';


class App extends Component {
  state = {
    Rr: {}
  }
  render() {
    return ( 
    <div className="App container">
      <h2 className='center-align light-blue'>Risk To Reward Calculator</h2>
     {/* Now I have to add all the important input parmaters starting with account balance*/}
     <AddRRUser />
    </div>
    );
  }
}

export default App;
