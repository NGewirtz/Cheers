cheers = user.checkins.reduce(0){ |acc, checkin|  acc + checkin.cheers.count}
wishlist_beers = user.wishlist_items.map{|item| item.beer.id }

json.extract! user, :username, :id
json.image user.image.url
json.commentCount user.comments.count
json.cheers cheers
json.wishlistBeers wishlist_beers
json.checkinIds user.checkins.ids
