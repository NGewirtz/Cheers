import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CheckinShow from './checkin_show.jsx';
import { fetchCheckin } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheckin: id => dispatch(fetchCheckin(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinShow));
