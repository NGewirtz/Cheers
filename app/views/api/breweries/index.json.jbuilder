@breweries.each do |brewery|
  json.set! brewery.id do
    json.extract! brewery, :id, :name
  end
end
