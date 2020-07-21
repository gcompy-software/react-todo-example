import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class App extends React.Component{
  
  render(){
     return(
         <Dashboard />
     );
  }
}



ReactDOM.render(<App/>, document.getElementById('app'))



export default App;
