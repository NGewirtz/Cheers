# CHEERS!

![CHEERS!](http://s3-us-east-2.amazonaws.com/cheers-the-app/beers/images/000/000/809/original/Screen_Shot_2017-10-28_at_4.20.51_PM.png?1509635721)

Cheers is a full stack web app built using Ruby on Rails and React with Redux technologies. Cheers allows you to checkin a rating for your favorite beers. You can comment on your fiends checkins, check out the top ranked beers on the site, search all beers, and add new beers to your wish list. Inspired by untapped, cheers brings beer drinkers together from all over the world.

## Live site

[CHEERS!](https://cheers-the-app.herokuapp.com/#/)

## Technology

Ruby on Rails - Used primarily to build a backend api, RoR is responsible for modeling and delivering data to the user, querying the database with active record, and providing secure user specific content.

React - All front end views are rendered with React. React is also responsible for managing and interpreting user input, and efficiently loading data.

Redux - Working with React, Redux was used to manage the data, or state of the entire app. Redux ensures data speed and reliability by ensuring that a singe source of truth is maintained throughout the app.

## Features

Autocomplete Search - On the header of every page you can find a search bar which allows users to quickly find the beer of their choice. I was able to take full advantage of React's reusable components for easy styling, RoR's active record to handle querying, and Redux to store my query in its own slice of state. The result is a fast, lightweight, easy to use search feature.

##### Entire Controller Method
```
def search
  if params[:query].present?
    @beers = Beer.all.includes(:brewery).where('lower(name) ~ ?', params[:query].downcase)
    render 'api/beers/search'
  end
end
```

##### Front End Component
```
handleChange(e) {
  e.preventDefault();
  this.props.searchBeers({ query: e.target.value });
}

render() {
  const searchResults = this.props.search.map(beer => (
    <SidebarItem beer={beer} key={beer.id} />
  ));
  return (
    <div className="search-div">
      <input id="search" onChange={this.handleChange}
      type="text" placeholder="Find a beer.."/>
      <ul className="search-results">
        {searchResults}
      </ul>
    </div>
  );
}
```

Wishlist - Again taking advantage of the modularity of React components, I was able to transform the main sidebar into a custom wishlist for each individual user. By using RoR to model the association of each wish list beer ID to the user, I as able to render appropriate buttons to add and remove beers from the wishlist throughout the app. I then presented the entire wish list by reassigning the already built main sidebar to a new container, allowing the entire wishlist to be displayed, already styled, in each user's profile.

##### Sample Profile
![profile](http://s3-us-east-2.amazonaws.com/cheers-the-app/users/images/000/000/092/original/profile.png?1509639194)

##### Sample Detailed Checkin
![checkin](http://s3-us-east-2.amazonaws.com/cheers-the-app/users/images/000/000/092/original/checkinshow.png?1509639415)
