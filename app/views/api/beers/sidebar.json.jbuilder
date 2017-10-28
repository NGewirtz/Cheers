json.beers do
  @beers.each do |beer|
    json.set! beer.id do
      json.extract! beer, :name, :id
      json.breweryName beer.brewery.name
    end
  end
end

json.orderedIds @beers.map(&:id)
