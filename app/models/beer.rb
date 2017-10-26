class Beer < ApplicationRecord
  validates :name, :description, :beer_type, presence: true
  belongs_to :brewery
  has_many :checkins

  def rating
    self.checkins.average(:rating)
  end

  def ratings
    self.checkins.count(:rating)
  end

end
