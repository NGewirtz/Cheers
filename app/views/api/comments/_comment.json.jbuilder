json.extract! comment, :body, :id
json.username comment.user.username
json.userId comment.user.id
json.image comment.user.image.url
