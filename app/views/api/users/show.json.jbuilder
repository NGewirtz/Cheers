json.partial! 'api/users/user', user: @user
json.checkinIds @user.checkins.ids

json.checkins do
  @user.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end
