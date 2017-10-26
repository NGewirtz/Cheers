class Brewery < ApplicationRecord
  has_many :beers
  has_many :checkins,
    through: :beers,
    source: :checkins
end
