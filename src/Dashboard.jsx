import React from 'react'

class Dashboard extends React.Component {
   
    delete(id){
        this.props.delete(id);
     }

       render() {
           return (
               <div>
                   {
                      this.props.items.map((item)=>
                      <p key={item.id}>
                         {item.id}
                         {item.title}
                         {item.person}
                         {item.state}
                         {item.deadline}
                         {item.created}
                         <button onClick={this.delete.bind(this, item)}>Delete</button>
                      </p>
                      )
                   }
               </div>
           );
       }
   }

class Task extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
             items: [],
             id: '', 
             title: '',
             person: '',
             state: '',
             deadline: '',
             created: '',
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.delete = this.delete.bind(this)
      }
  
      render() {
          return (
              <div>
                  <h3>TODO</h3>
                  <Dashboard items={this.state.items} delete={this.delete}/>
                  <form onSubmit={this.handleSubmit}>
                      <input id="title"onChange={this.handleChange} value={this.state.title} />
                      <input id="person" onChange={this.handleChange} value={this.state.person} />
                      <input id="state" onChange={this.handleChange} value={this.state.state} />
                      <input id="deadline" onChange={this.handleChange} value={this.state.deadline} />
                      <input id="created" onChange={this.handleChange} value={this.state.created} />
                      <button>{'Add #' + (this.state.items.length + 1)}</button>
                  </form>
              </div>
          );
      }
      
      handleChange(e) {
         console.log(e.target.id)
          this.setState({
            [e.target.id]: e.target.value
         });
      }

      handleSubmit(e) {
          e.preventDefault();
          var newItem = {
              id: Date.now(),
              title: this.state.title,
              person: this.state.person,
              state: this.state.state,
              deatline: this.state.deatline,
              created: this.state.created,
              
          };
          this.setState((prevState) => ({
              items: prevState.items.concat(newItem),
              id: '', 
              title: '',
              person: '',
              state: '',
              deadline: '',
              created: ''
          }));
      }
  
      delete(id){          
          this.setState(prevState => ({
            items: prevState.items.filter(el => el !== id )
        }));
      }
  }
  

  

export default Dashboard
