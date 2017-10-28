json.partial! 'api/beers/beer', beer: @beer

json.checkins do
  @beer.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end
