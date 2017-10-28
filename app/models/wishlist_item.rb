class WishlistItem < ApplicationRecord
  validates :user, uniqueness: { scope:  :beer }
  belongs_to :beer
  belongs_to :user
end
