import React from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit} className="user-form">
          <input type='text'value={this.state.username}
            onChange={this.handleChange('username')} placeholder="Username"/>
          <input type='password' value={this.state.password}
            onChange={this.handleChange('password')} placeholder="Password"/>
          <input type="submit" value={this.props.formType}/>
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}



export default SessionForm;
