@checkins.each do |checkin|
  json.set! checkin.id do
    json.partial! 'api/checkins/checkin', checkin: checkin
  end
end
