import React from 'react';
import Header from '../header';

class BeerForm extends React.Component {



  render() {
    return (
      <div className="wrapper">
        <Header />
        <form className="beer-form">
          <div>
            <img />
            <div className="beer-form-top">
              <input placeholder="Name"/>
              <input />
            </div>
          </div>
          <button className="add-image">Add Image</button>
          <div>
            <input placeholder="Abv"/>
            <input placeholder="Ibu"/>
            <input placeholder="Type"/>
          </div>
          <textarea placeholder="Description"/>
          <input type='submit' value='Add Beer'/>
        </form>
      </div>
    );
  }

}

export default BeerForm;
