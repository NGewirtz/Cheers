import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'/>
          <input type='password'/>
          <input type="submit" value={props.formType}/>
        </form>
      </div>
    );
  }
}



export default SessionForm;
