import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({ 'user': this.state });
  }

  handleChange(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let errors = this.props.errors.map(error => (
      <li className='errors'>{error}</li>
    ));
    return (
      <div className="splash">
        <form onSubmit={this.handleSubmit} className="user-form">
          <Link to="/"><h1>Cheers!</h1></Link><br></br>
          <input type='text'value={this.state.username}
            onChange={this.handleChange('username')} placeholder="Username"/>
          <input type='password' value={this.state.password}
            onChange={this.handleChange('password')} placeholder="Password"/>
          <input type="submit" value={this.props.formType}/>
          {this.props.formType === "Login" && <h4>Forgot your password?</h4>}
          {this.props.formType === "Login" &&
            <span>New around here? <Link to="/signup">Signup!</Link></span>}
          {this.props.formType === "Signup" &&
            <span>Already have an account? <Link to="/login">Login</Link></span>}
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}



export default SessionForm;
