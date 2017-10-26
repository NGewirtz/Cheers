json.extract! checkin, :rating, :body, :updated_at
json.username checkin.user.username
json.beer checkin.beer.name
json.brewery checkin.brewery.name
