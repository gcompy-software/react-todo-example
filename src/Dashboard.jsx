import React from 'react'
import API from './api.js'

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

componentDidMount(){
    API.get('tasks')
        .then(resp => {
            console.log(resp.data)
            this.setState(
                {
                    items: resp.data
                })
        })
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
        created: this.state.deadlin||Date.now(),
    }

    if(!this.state.id){ //Add row        
        API.post('tasks',data)
        .then(resp => {
            console.log(resp.data)
            let data = resp.data
            this.setState(prevState=>({
                items: [...prevState.items,data]
            }))
            alert("Success")
        }).catch((err)=>{
            console.error(err)
        })
    }else{
        API.put(`tasks/${this.state.id}`,data)
        .then(resp => {
            this.setState((prevState)=>(
                console.log(resp.data)    
                //console.log(prevState.items)
                
                // {
                //     items:[{data}]
                // }
            ))
            alert("Succes")
        }).catch((err)=>{
            alert('hola')
            console.error(err)
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
                       <button type="submit">Guardar</button>
                   </form>
            </div>
        );
    }
}

export default Dashboard
