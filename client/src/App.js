import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    title: '',
    body: ''
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

    
  

  submit = (event) => {
    event.preventDefault();
    console.log(this.state.body);
    const payload = {
      title: this.state.title,
      body: this.state.body
    }
    
    //axios
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
    })
    .catch(() => {
      console.log('Internal server error');
    });

    
  
  };
  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  }
  
  render() {

    //JSX
    return(
      <div>
        <h2>Welcome to my App</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange} 
            />
          </div>
          <div className="form-input">
            <textarea 
            name="body" 
            cols="30" 
            rows="10" 
            value={this.state.body} 
            onChange={this.handleChange} 
            placeholder="Body">

            </textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;