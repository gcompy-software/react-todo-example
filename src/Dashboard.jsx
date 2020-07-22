import React from 'react'

class Dashboard extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        items: [],
        id: '', 
        title: '',
        person: '',
        state: '',
        deadline: '',
        created: '',        
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    console.log(e.target.id)
     this.setState({
       [e.target.id]: e.target.value
    });
 }

 clear(){
    this.setState((prevState) => ({
        items : prevState.items,
        id: '', 
        title: '',
        person: '',
        state: '',
        deadline: '',
        created: '',
    }))
 }

 delete(id){          
    this.setState(prevState => ({
        items: prevState.items.filter(el => el !== id )
    }))
    this.clear()
 }

 edit(item){  
    this.setState((prevState) => ({
        items:prevState.items,...item
    }))
 }

handleSubmit(e) { 
    e.preventDefault();

    var data = {
        id: this.state.id || Date.now(),
        title: this.state.title,
        person: this.state.person,
        state: this.state.state,
        deadline: this.state.deadline,
        created: Date.now(),
    }

    if(!this.state.id){ //Add row   
        this.setState(prevState=>({
            items: [...prevState.items,data]
        }))
    }else{ //update row
        this.setState(
            {
                items: [data]
            })     
    }
    this.clear()
}

    render() {
        return (
            <div>
                {
                    this.state.items.map((item)=>
                    <p key={item.id}>
                        {item.id}
                        {item.title}
                        {item.person}
                        {item.state}
                        {item.deadline}
                        {item.created}
                        <button onClick={this.delete.bind(this, item)}>Delete</button>
                        <button onClick={this.edit.bind(this, item)}>Edit</button>
                    </p>
                    )
                }
                   <form onSubmit={this.handleSubmit}>
                       <input id="title" onChange={this.handleChange} value={this.state.title} />
                       <input id="person" onChange={this.handleChange} value={this.state.person} />
                       <input id="state" onChange={this.handleChange} value={this.state.state} />
                       <input id="deadline" onChange={this.handleChange} value={this.state.deadline} />
                       <input id="created" onChange={this.handleChange} value={this.state.created} />
                       <button type="submit">Add</button>
                   </form>
            </div>
        );
    }
}

export default Dashboard
