json.beer do
  json.partial! 'api/beers/beer', beer: @beer
end

json.checkins do
  @beer.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end

json.user do
  json.partial! 'api/users/user', user: current_user
end
