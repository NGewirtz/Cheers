import React from 'react';
import Header from '../header';
import SidebarItem from '../sidebar/sidebar_item';

class CheckinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: 5,
      beerId: this.props.match.params.beerId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createCheckin(this.state).then(() => this.props.history.push('/bar'));
  }

  handleChange(key){
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    if(!this.props.beer) {
      return <h1>Loading</h1>;
    }else {
      return (
        <div className='wrapper'>
          <Header />
          <form onSubmit={this.handleSubmit} className='checkin-form'>
            <SidebarItem beer={this.props.beer} />
            <textarea onChange={this.handleChange("body")} placeholder="Describe this beer"/>
            <div className="range-container">
              <input onChange={this.handleChange("rating")} type="range" min="0" max="5"/>
              <span>Rating: {this.state.rating} &#9734; </span>
            </div>
            <input type='submit' value='Add Checkin'/>
          </form>
        </div>
      );
    }
  }
}

export default CheckinForm;