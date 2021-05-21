
import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ ...this.state, [name]: value})
    }

    handleSubmit = (e) => {
    e.preventDefault();
    this.props.handler(this.state)
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(this.state.url && this.state.method){
  //     this.props.handler(this.state)
  //   }
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
              <input name="url" placeholder="http://..." onChange={this.handleChange} />
          </label>
          <label>
              <input name="method" value="get" type="radio"  onChange={this.handleChange} /> <span>GET</span> 
          </label>
          <label>
              <input name="method" value="post" type="radio" onChange={this.handleChange} /> <span>POST</span> 
          </label>
          <label>
            <button>  API</button>
          </label>
          <div>
            <textarea name="body" onChange={this.handleChange}></textarea>
          </div>

      </form>
          )
        }
      }

export default Form; 