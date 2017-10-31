json.brewery do
  json.extract! @brewery, :id, :name, :description, :location, :created_at, :rating, :ratings, :beer_count
  json.image @brewery.image.url
  json.beerIds @brewery.beers.ids
  json.checkinIds @brewery.checkins.ids

end

json.beers do
  @brewery.beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end

json.checkins do
  @brewery.checkins[0...15].each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end
