class Beer < ApplicationRecord
  validates :name, :description, :beer_type, presence: true
  belongs_to :brewery
end
