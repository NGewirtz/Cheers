import React from 'react';
import SidebarItem from '../sidebar/sidebar_item';

class CheckinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.form;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.match.path !== "/checkins/:checkinId/edit") {
      this.props.fetchBeer(this.props.match.params.beerId);
    }else {
      this.props.fetchCheckin(this.props.match.params.checkinId).then(checkin => {
        this.props.fetchBeer(checkin.checkin.beerId).then(beer => {
          this.setState({body: checkin.checkin.body, rating: checkin.checkin.rating, beerId: beer.beer.id, id: checkin.checkin.id });
        });
      }
    );}
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location && newProps.location !== "/checkins/:checkinId/edit") {
      this.props.fetchBeer(newProps.match.params.beerId);
    }else if(this.props.location !== newProps.location) {
      this.props.fetchCheckin(newProps.match.params.checkinId).then(checkin => {
        this.props.fetchBeer(checkin.checkin.beerId).then(beer => {
          this.setState({body: checkin.checkin.body, rating: checkin.checkin.rating, beerId: beer.beer.id, id: checkin.checkin.id });
        });
      }
    );}
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then((checkin) => this.props.history.push(`/checkins/${checkin.checkin.id}`));
  }

  handleChange(key){
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    if(!this.props.beer || !this.state) {
      return <div></div>;
    }else {
      const errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
      return (
        <form onSubmit={this.handleSubmit} className='checkin-form'>
          <SidebarItem beer={this.props.beer} />
          <textarea value={this.state.body} onChange={this.handleChange("body")} placeholder="Describe this beer"/>
          <div className="range-container">
            <input value={this.state.rating} onChange={this.handleChange("rating")} type="range" min="0" max="5"/>
            <span>Rating: {this.state.rating} &#9734; </span>
          </div>
          <input type='submit' value={this.props.formType}/>
          <ul className='checkin-form-errors'>
            {errors}
          </ul>
        </form>
      );
    }
  }
}

export default CheckinForm;
