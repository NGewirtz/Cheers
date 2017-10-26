import { connect } from 'react-redux';
import CheckinIndex from './checkin_index.jsx';
import { fetchCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state) => {
  return {
    checkins: Object.values(state.entities.checkins)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: (filter) => dispatch(fetchCheckins(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
