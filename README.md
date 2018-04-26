# CHEERS!

![CHEERS!](http://s3-us-east-2.amazonaws.com/cheers-the-app/beers/images/000/000/809/original/Screen_Shot_2017-10-28_at_4.20.51_PM.png?1509635721)

Cheers is a full stack web application built using Ruby on Rails and React with Redux technologies. At its core Cheers is a website that allows you to checkin a rating for all of your favorite beers. You can comment on your friends checkins, check out the top ranked beers throughout the entire site, search for a particular beer, and add new beers to your own personal wish list. Inspired by untapped, cheers brings beer drinkers together from all over the world.

## Live site

[CHEERS!](http://cheers-the-app.herokuapp.com/#/)

## Technology

Ruby on Rails - Used primarily to build a backend api, RoR is responsible for modeling and delivering data to the user, querying the database with active record, and providing secure user specific content.

React - All front end views are rendered with React. React is also responsible for managing and interpreting user input, and efficiently presenting data.

Redux - While working hand in hand with React, Redux is used to manage the data, or state of the entire app. Redux helps maintain data speed and reliability by ensuring that a singe source of truth is accessible throughout the app.

## Features

Autocomplete Search - On the header of every page you can find a search bar which allows users to quickly find the beer of their choice. I was able to take full advantage of React's reusable components for easy styling, RoR's active record to handle querying, and Redux to store my query in its own slice of state. The result is a fast, lightweight, easy to use search feature.

![search](https://media.giphy.com/media/xT0CyETpgzOy8GtESk/giphy.gif)

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

Wishlist - Again taking advantage of the modularity of React components, I was able to transform the main sidebar into a custom wish list for each individual user. By using RoR to model the association of each wish list beer ID to the user, I was able to render appropriate buttons to add and remove beers from the wish list throughout the app. I then presented the entire wish list by reassigning the already built main sidebar to a new container, allowing the entire wish list to be displayed, already styled, in each user's profile.


![wishlist](https://media.giphy.com/media/3ohjUR9glmQosNITgk/giphy.gif)

##### Sample Detailed Checkin
![checkin](https://s3.us-east-2.amazonaws.com/cheers-the-app/checkinshow.png)
