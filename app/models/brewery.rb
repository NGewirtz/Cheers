class Brewery < ApplicationRecord
  validates :location, :name, presence: true
  has_many :beers
  has_many :checkins,
    through: :beers,
    source: :checkins
end
