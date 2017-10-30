cheers = user.checkins.reduce(0){ |acc, checkin|  acc + checkin.cheers.count}

json.extract! user, :username, :id
json.image user.image.url
json.commentCount user.comments.count
json.cheers cheers
