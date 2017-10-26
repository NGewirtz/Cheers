import React from 'react';
import Header from '../header';
import SidebarItem from '../sidebar/sidebar_item';

class CheckinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  handleSubmit(){

  }

  handleChange(key){
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    if(!this.props.beer) {
      return <h1>Loading</h1>
    }else{
      return (
        <div className='wrapper'>
          <Header />
          <form onSubmit={this.handleSubmit} className='checkin-form'>
            <SidebarItem beer={this.props.beer} />
            <textarea onChange={this.handleChange("description")} placeholder="Describe this beer"/>
            <input onChange={this.handleChange("rating")} type="range" min="0" max="5"/>
            <input type='submit' value='Add Checkin'/>
            <h1>{this.state.rating}</h1>
          </form>
        </div>
      );
    }
  }
}

export default CheckinForm;
