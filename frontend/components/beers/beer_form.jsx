import React from 'react';
import Header from '../header';

class BeerForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.beer;
  }

  componentDidMount() {
    if ((this.props.location.pathname !== "/beers/new" ) && (!this.props.beer)){
      this.props.fetchBeer(this.props.match.params.beerId);
    }else if($.isEmptyObject(this.props.breweries)) {
      this.props.fetchBreweries();
    }
  }

  componentWillReceiveProps(newProps) {
    if ((newProps.location.pathname !== "/beers/new") && (this.props.location.pathname != newProps.location.pathname)) {
      this.props.fetchBeer(newProps.match.params.beerId);
    }else if($.isEmptyObject(this.props.breweries)){
      this.props.fetchBreweries();
    }
  }

  handleChange(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    if (!this.props.beer) {
      return <h1>Loading....</h1>;
    }else {
      const breweries = this.props.breweries.map(brewery => (
        <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
      ));
      return (
        <div className="wrapper">
          <Header />
          <form className="beer-form" onSubmit={this.handleSubmit}>
            <div>
              <img />
              <div className="beer-form-top">
                <input onChange={this.handleChange('name')}
                  value={this.state.name} placeholder="Name"/>
                <select onChange={this.handleChange('brewery_id')}
                  value={this.state.brewery_id}> <option value="" selected disabled hidden>Select A Brewery</option>{breweries}</select>
              </div>
            </div>
            <button className="add-image">Add Image</button>
            <div>
              <input className="one-third-form" onChange={this.handleChange('abv')}
                value={this.state.abv} placeholder="Abv"/>
              <input className="one-third-form" onChange={this.handleChange('ibu')}
                value={this.state.ibu} placeholder="Ibu"/>
              <input className="one-third-form" onChange={this.handleChange('beer_type')}
                value={this.state.beer_type} placeholder="Type"/>
            </div>
            <textarea onChange={this.handleChange('description')}
              value={this.state.description} placeholder="Description"/>
            <input type='submit' value='Add Beer'/>
          </form>
        </div>
      );
    }
  }

}

export default BeerForm;
