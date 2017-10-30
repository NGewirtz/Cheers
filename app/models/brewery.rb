class Brewery < ApplicationRecord
  validates :location, :name, presence: true
  has_many :beers
  has_many :checkins,
    through: :beers,
    source: :checkins

  has_attached_file :image, default_url: "https://s3.us-east-2.amazonaws.com/cheers-the-app/defaultBrewery.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def rating
    self.checkins.average(:rating)
  end

  def ratings
    self.checkins.count(:id)
  end

  def beer_count
    self.beers.count(:id)
  end

end
