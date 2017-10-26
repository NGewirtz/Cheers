json.extract! beer, :name, :description, :beer_type, :brewery_id, :id, :created_at, :abv, :ibu, :rating, :ratings
json.breweryName beer.brewery.name
