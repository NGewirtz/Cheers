class Checkin < ApplicationRecord
  validates :body, :rating, presence: true
  validates :rating, inclusion: 0..5
  validates :user, uniqueness: { scope:  :beer, message: "can only checkin a beer once" }
  belongs_to :user
  belongs_to :beer
  has_many :comments
  has_many :cheers
  after_create :update_beer_avg

  has_one :brewery,
    through: :beer,
    source: :brewery


  def update_beer_avg
    beer = Beer.find(self.beer_id)
    if !beer.avg_rating
      avg = self.rating
    else
      avg = (((beer.avg_rating.to_f * (beer.ratings.to_f - 1 ))) + self.rating.to_f ) / (beer.ratings.to_f)
    end
    beer.update!(avg_rating: avg)
  end
end
