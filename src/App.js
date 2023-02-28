import React from 'react';

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div className='login'>
        <div className='avatar'>
          <img className='avatar-img' src='https://goo-gl.me/FPUud' />
        </div>
        <h2>Login</h2>
        <h3>Wellcome back</h3>
        <form 
            onSubmit={this.handleSubmit}
            className='login-form'>
          <div className='form-group'>
            <input 
              value={this.state.value}
              onChange={this.handleChange}
              type='email' 
              placeholder='Username'/>
          </div>
          <div className='form-group'>
            <input 
              type='password'
              placeholder='Password'/>
          </div>
          <button type='submit'>LOGIN</button>
        </form>

      </div>

  
    )
  }

}

export default NewForm;