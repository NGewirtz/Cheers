@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :name, :description, :beer_type, :brewery_id
  end
end
