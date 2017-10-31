json.beers do
  @beers.each do |beer|
    json.set! beer.id do
      json.extract! beer, :name, :id
      json.breweryName beer.brewery.name
      json.image beer.image.url
      json.brewery_id beer.brewery.id
    end
  end
end

json.orderedIds @beers.map(&:id)
