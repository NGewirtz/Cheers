class Checkin < ApplicationRecord
  validates :body, :rating, presence: true
  validates :rating, inclusion: 0..5
  validates :user, uniqueness: { scope:  :beer, message: "can only checkin a beer once" }
  belongs_to :user
  belongs_to :beer
  has_many :comments
  has_many :cheers
  after_create :update_beer_avg, :update_brew_avg

  before_update :remove_beer_avg, :remove_brew_avg
  after_update :update_beer_avg, :update_brew_avg

  has_one :brewery,
    through: :beer,
    source: :brewery


  def remove_beer_avg
    beer = Beer.find(self.beer_id)
    if beer.ratings == 1
      avg = nil
    else
      avg = (((beer.avg_rating.to_f * (beer.ratings.to_f))) - user.checkins.find(self.id).rating.to_f ) / (beer.ratings.to_f - 1)
    end
    beer.update!(avg_rating: avg)
  end

  def remove_brew_avg
    brewery = Brewery.find(self.beer.brewery.id)
    if brewery.ratings == 1
      avg = nil
    else
      avg = (((brewery.avg_rating.to_f * (brewery.ratings.to_f))) - user.checkins.find(self.id).rating.to_f ) / (brewery.ratings.to_f - 1)
    end
    brewery.update!(avg_rating: avg)
  end

  def update_beer_avg
    beer = Beer.find(self.beer_id)
    if !beer.avg_rating
      avg = self.rating
    else
      avg = (((beer.avg_rating.to_f * (beer.ratings.to_f - 1 ))) + self.rating.to_f ) / (beer.ratings.to_f)
    end
    beer.update!(avg_rating: avg)
  end

  def update_brew_avg
    brewery = Brewery.find(self.beer.brewery.id)
    if !brewery.avg_rating
      avg = self.rating
    else
      avg = (((brewery.avg_rating.to_f * (brewery.ratings.to_f - 1 ))) + self.rating.to_f ) / (brewery.ratings.to_f)
    end
    brewery.update!(avg_rating: avg)
  end
end
