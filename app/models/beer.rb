class Beer < ApplicationRecord
  validates :name, :description, :beer_type, presence: true
  belongs_to :brewery
  has_many :checkins

  has_attached_file :image, default_url: "https://s3.us-east-2.amazonaws.com/cheers-the-app/defaultBeer.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def rating
    self.checkins.average(:rating)
  end

  def ratings
    self.checkins.count(:id)
  end

end
