json.checkins do
  @checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end

json.orderedIds @checkins.map(&:id)
