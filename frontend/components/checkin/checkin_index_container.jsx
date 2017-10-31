import { connect } from 'react-redux';
import CheckinIndex from './checkin_index.jsx';
import { fetchCheckins } from '../../actions/checkin_actions';
import { entitiesSelector } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    checkins: entitiesSelector(state.entities.checkins, state.checkinIds),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: (filter) => dispatch(fetchCheckins(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
