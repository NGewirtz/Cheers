json.checkin do
  json.partial! 'api/checkins/checkin', checkin: @checkin
end

json.comments do
  @checkin.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.users do
  @checkin.cheers.each do |cheer|
    json.set! cheer.user.id do
      json.partial! 'api/users/user', user: cheer.user
    end
  end
end
