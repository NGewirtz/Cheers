json.user do
  json.partial! 'api/users/user', user: @user
  json.checkinIds @user.checkins.ids
end

json.checkins do
  @user.checkins[0...15].each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end
