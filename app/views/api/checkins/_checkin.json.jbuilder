json.extract! checkin, :rating, :body, :updated_at
json.username checkin.user.username
json.beer checkin.beer.name
json.brewery checkin.brewery.name
json.usernameId checkin.user.id
json.beerId checkin.beer.id
json.breweryId checkin.brewery.id
