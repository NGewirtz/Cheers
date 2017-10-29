cheerUserIds = checkin.cheers.map { |cheer| cheer.user.id }

json.extract! checkin, :rating, :body, :updated_at, :id
json.username checkin.user.username
json.beer checkin.beer.name
json.beerImage checkin.beer.image.url
json.brewery checkin.brewery.name
json.usernameId checkin.user.id
json.userImage checkin.user.image.url
json.beerId checkin.beer.id
json.breweryId checkin.brewery.id
json.commentIds checkin.comments.ids
json.cheerUserIds cheerUserIds
