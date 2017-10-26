class Checkin < ApplicationRecord
  validates :body, :rating, presence: true
  validates :rating, inclusion: 0..5
  validates :user, uniqueness: { scope:  :beer }
  belongs_to :user
  belongs_to :beer

  has_one :brewery,
    through: :beer,
    source: :brewery
end
