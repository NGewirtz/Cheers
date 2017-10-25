import { connect } from 'react-redux';
import BeerForm from './beer_form.jsx';

const mapStateToProps = (state, ownProps) => {
  let beer;
  if (ownProps.location.path === "new" ) {

  }else {
    beer = { name: '', description: '', type: '', brewery_id: '', abv: '', ibu: '' }
  }
  return {
    beer
  }
};

const mapDispatchToProps = (dispatch) => {

};


export default connect(mapStateToProps, mapDispatchToProps)(BeerForm);
