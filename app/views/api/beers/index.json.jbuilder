json.beers do
  @beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end

json.orderedIds @beers.map(&:id)

json.user do
  json.partial! 'api/users/user', user: current_user
end
