json.extract! beer, :name, :description, :beer_type, :brewery_id, :id, :created_at, :abv, :ibu, :ratings
json.breweryName beer.brewery.name
json.rating beer.avg_rating
json.checkinIds beer.checkins.ids
