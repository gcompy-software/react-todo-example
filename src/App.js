import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TaskForm from './TaskForm';

class App extends React.Component{
  constructor(){
     super();
     this.state = {
       data: [1,2,3,4,5]
     }
     this.delete = this.delete.bind(this);
  }
  
  delete(id){
     this.setState(prevState => ({
         data: prevState.data.filter(el => el !== id )
     }));
  }
  
  render(){
     return(
         <TaskForm />
         // <Child delete={this.delete} data={this.state.data}/>
     );
  }
}

// class Child extends React.Component{

//   delete(id){
//       this.props.delete(id);
//   }
  
//   render(){
//      return(
//         <div>
           
//           {/* {
//              this.props.data.map((el,index)=>
//                  <p key={index} onClick={this.delete.bind(this, el)}>{el}</p>
//              )
//           } */}
          
//         </div>
//      )
//   }
// }


ReactDOM.render(<App/>, document.getElementById('app'))



export default App;
