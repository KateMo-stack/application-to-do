import React, {Component } from 'react'

class AddTodo extends Component {
    state = {
      content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.nowanazwa(this.state);
        this.setState({
            content: ''

        })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <input type="submit" value="Submit" />
                
                </form>
            </div>
        )
    }

}

export default AddTodo;
