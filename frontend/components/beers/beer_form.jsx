import React from 'react';
import { createBeer } from '../../util/beer_api_util';

class BeerForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.state = this.props.beer;
  }

  componentDidMount() {
    this.props.clearErrors();
    if ((this.props.location.pathname !== "/beers/new" )){
      this.props.fetchBeer(this.props.match.params.beerId);
    }else if($.isEmptyObject(this.props.breweries)) {
      this.props.fetchBreweries();
    }
  }

  componentWillReceiveProps(newProps) {
    if ((newProps.location.pathname !== "/beers/new") && (this.props.location !== newProps.location)) {
      this.props.fetchBeer(newProps.match.params.beerId);
    }else if($.isEmptyObject(this.props.breweries)){
      this.props.fetchBreweries();
    }else if(newProps.beer !== this.state) {
      this.setState(newProps.beer);
    }
  }

  handleImageUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, image: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", image: null });
    }
  }

  handleChange(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.image;
    const formData = new FormData();
    if (file) formData.append("beer[image]", file);
    let x = Object.keys(this.state).map(key => {
      formData.append(`beer[${key}]`, this.state[key]);
    });
    this.props.action(formData).then(() => this.props.history.push('/beers'));
  }

  render() {
    if (!this.props.beer || !this.state) {
      return <div></div>;
    }else {
      const breweries = this.props.breweries.map(brewery => (
        <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
      ));
      const errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
      return (
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <div>
            <img src={this.state.imageUrl || this.state.image}/>
            <div className="beer-form-top">
              <input onChange={this.handleChange('name')}
                value={this.state.name} placeholder="Name"/>
              <select onChange={this.handleChange('brewery_id')}
                value={this.state.brewery_id}>
                <option value="" selected disabled hidden>Select A Brewery</option>
                {breweries}
              </select>
            </div>
          </div>
          <label htmlFor="file" className="add-image">Add An Image
            <input id="file" type="file" onChange={this.handleImageUpload} className="add-image"></input>
          </label>
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
          <input type='submit' value={this.props.formType}/>
          <ul className='beer-form-errors'>
            {errors}
          </ul>
        </form>
      );
    }
  }
}

export default BeerForm;
