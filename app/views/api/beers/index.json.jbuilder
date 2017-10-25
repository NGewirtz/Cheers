@beers.each do |beer|
  json.set! beer.id do
    json.partial! 'api/beers/beer', beer: beer
  end
end
