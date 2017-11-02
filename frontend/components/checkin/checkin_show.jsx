import React from 'react';
import SidebarItem from '../sidebar/sidebar_item';
import Rating from '../rating';
import CheckinComments from './checkin_comments';
import CheckinShowHeader from './checkin_show_header';
import CheckinCheers from './checkin_cheers';
import { _dynamicTitle } from '../../util/format_util';

class CheckinShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      checkinId: this.props.match.params.checkinId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheers = this.handleCheers.bind(this);
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

  handleCheers(e) {
    e.preventDefault();
    this.props.cheersCheckin(this.props.match.params.checkinId);
  }

  componentDidMount() {
    window.scroll(0,0);
    this.props.fetchCheckin(this.props.match.params.checkinId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.fetchCheckin(newProps.match.params.checkinId);
    }
  }

  render() {
    if (!this.props.checkin) {
      return <div></div>;
    }else {
      const checkin = this.props.checkin;
      const beer = { id: checkin.beerId, name: checkin.beer, breweryName: checkin.brewery, image: checkin.beerImage, brewery_id: checkin.breweryId };
      _dynamicTitle(checkin.beer + " Checkin");
      return (
        <article className="checkin-show-body">
          <CheckinShowHeader checkin={checkin} />
          <hr></hr>
          <SidebarItem beer={beer} />
          <section className="checkin-show-rating">
            <h3>{checkin.body}</h3>
            <Rating rating={checkin.rating} />
          </section>
          <CheckinCheers cheersCheckin={this.props.cheersCheckin}
            deleteCheersCheckin={this.props.deleteCheersCheckin}
            users={this.props.users}
            cheerUserIds={checkin.cheerUserIds || []}
            checkinId={checkin.id}
            cheered={this.props.cheered} />
          <CheckinComments comments={this.props.comments}
            userId={this.props.userId}
            deleteComment={this.props.deleteComment} />
          <form onSubmit={this.handleSubmit} className="comment-form">
            <textarea maxLength='140' value={this.state.body}
              onChange={this.handleChange} placeholder="Leave a comment..." />
            <p>{this.state.body.length}/140</p>
            <button>Post</button>
          </form>
        </article>
      );
    }
  }
}


export default CheckinShow;
