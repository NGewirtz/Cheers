import React from 'react';
import SidebarItem from '../sidebar/sidebar_item';
import Rating from '../rating';
import { Link } from 'react-router-dom';
import CheckinComments from './checkin_comments';

class CheckinShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      checkinId: this.props.match.params.checkinId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state).then(() => {
      this.props.clearErrors();
      this.setState({ body: '' });
    });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  componentDidMount() {
    this.props.fetchCheckin(this.props.match.params.checkinId);
    this.props.fetchComments(this.props.match.params.checkinId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.fetchCheckin(newProps.match.params.checkinId);
      this.props.fetchComments(newProps.match.params.checkinId);
    }
  }

  render() {
    if (!this.props.checkin) {
      return <div></div>;
    }else {
      const checkin = this.props.checkin;
      const beer = { id: checkin.beerId, name: checkin.beer, breweryName: checkin.brewery };
      return (
        <article className="checkin-show-body">
          <header>
            <img />
            <h2><Link to={`/users/${checkin.usernameId}`}>{checkin.username}</Link></h2>
          </header>
          <SidebarItem beer={beer} />
          <section className="checkin-show-rating">
            <h3>{checkin.body}</h3>
            <Rating rating={checkin.rating} />
          </section>
          <section className="cheers-section">
            <button title="CHEERS!" className="cheers-button">&#x1f37a;</button>
            <span>5</span>
            <div>
              <img className="user-header-img" src="http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"/>
              <img className="user-header-img" src="http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"/>
              <img className="user-header-img" src="http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"/>
              <img className="user-header-img" src="http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"/>
              <img className="user-header-img" src="http://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"/>
            </div>
          </section>
          <CheckinComments comments={this.props.comments} />
          <form onSubmit={this.handleSubmit} className="comment-form">
            <textarea value={this.state.body} onChange={this.handleChange} placeholder="Leave a comment" />
            <button>Post</button>
          </form>
        </article>
      );
    }
  }
}


export default CheckinShow;
