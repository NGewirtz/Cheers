class Cheer < ApplicationRecord
  validates :user, uniqueness: { scope:  :checkin }
  belongs_to :checkin
  belongs_to :user
end
