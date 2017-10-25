@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :name, :description, :beer_type, :brewery_id, :id, :created_at
    json.breweryName beer.brewery.name
  end
end
