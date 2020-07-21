import React from 'react'

class TodoApp extends React.Component {
      constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.state = {items: [], text: ''};
      }
  
      render() {
          return (
              <div>
                  <h3>TODO</h3>
                  <TodoList items={this.state.items} />
                  <form onSubmit={this.handleSubmit}>
                      <input onChange={this.handleChange} value={this.state.text} />
                      <button>{'Add #' + (this.state.items.length + 1)}</button>
                  </form>
              </div>
          );
      }
  
      handleChange(e) {
          this.setState({text: e.target.value});
      }
  
      handleSubmit(e) {
          e.preventDefault();
          var newItem = {
              text: this.props.w +''+this.props.t,
              id: Date.now()
          };
          this.setState((prevState) => ({
              items: prevState.items.concat(newItem),
              text: ''
          }));
      }
  
      delete(id){          // How that function knows id of item that need to delete and how to delete item?
          this.setState(this.item.id)
      }
  }
  
  class TodoList extends React.Component {
      render() {
          return (
              <ul>
                  {/* {this.props.items.map(item => (
                      <li key={item.id}>{item.text}<button onClick={this.delete.bind(this, item)}>Delete</button></li>
                  ))}  */}
              </ul>
          );
      }
  }
  

export default TodoApp